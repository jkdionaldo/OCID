class SecureStorage {
  // Generate a key from password using PBKDF2
  static async generateKey(password, salt) {
    const encoder = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey(
      "raw",
      encoder.encode(password),
      { name: "PBKDF2" },
      false,
      ["deriveBits", "deriveKey"]
    );

    return window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt,
        iterations: 100000,
        hash: "SHA-256",
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt", "decrypt"]
    );
  }

  // Get or create encryption key
  static async getEncryptionKey() {
    const password = this.getDeviceFingerprint();
    const salt = await this.getSalt();
    return this.generateKey(password, salt);
  }

  // Generate device fingerprint for encryption key
  static getDeviceFingerprint() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.textBaseline = "top";
    ctx.font = "14px Arial";
    ctx.fillText("Device fingerprint", 2, 2);

    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width + "x" + screen.height,
      new Date().getTimezoneOffset(),
      canvas.toDataURL(),
      navigator.hardwareConcurrency || "unknown",
      navigator.deviceMemory || "unknown",
    ].join("|");

    return fingerprint;
  }

  // Get or generate salt for key derivation
  static async getSalt() {
    let salt = localStorage.getItem("_sec_salt");
    if (!salt) {
      const saltArray = window.crypto.getRandomValues(new Uint8Array(16));
      salt = Array.from(saltArray, (byte) =>
        byte.toString(16).padStart(2, "0")
      ).join("");
      localStorage.setItem("_sec_salt", salt);
    }
    return new Uint8Array(
      salt.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
    );
  }

  // Encrypt data using AES-GCM
  static async encrypt(data) {
    try {
      const key = await this.getEncryptionKey();
      const encoder = new TextEncoder();
      const dataBuffer = encoder.encode(JSON.stringify(data));

      // Generate random IV for each encryption
      const iv = window.crypto.getRandomValues(new Uint8Array(12));

      const encrypted = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv: iv },
        key,
        dataBuffer
      );

      // Combine IV and encrypted data
      const combined = new Uint8Array(iv.length + encrypted.byteLength);
      combined.set(iv);
      combined.set(new Uint8Array(encrypted), iv.length);

      // Convert to base64 for storage
      return btoa(String.fromCharCode.apply(null, combined));
    } catch (error) {
      console.error("Encryption failed:", error);
      throw new Error("Failed to encrypt data");
    }
  }

  // Decrypt data using AES-GCM
  static async decrypt(encryptedData) {
    try {
      const key = await this.getEncryptionKey();

      // Convert from base64
      const combined = new Uint8Array(
        atob(encryptedData)
          .split("")
          .map((char) => char.charCodeAt(0))
      );

      // Extract IV and encrypted data
      const iv = combined.slice(0, 12);
      const encrypted = combined.slice(12);

      const decrypted = await window.crypto.subtle.decrypt(
        { name: "AES-GCM", iv: iv },
        key,
        encrypted
      );

      const decoder = new TextDecoder();
      const decryptedText = decoder.decode(decrypted);
      return JSON.parse(decryptedText);
    } catch (error) {
      console.error("Decryption failed:", error);
      return null;
    }
  }

  // Store encrypted data
  static async setItem(key, data) {
    try {
      const encrypted = await this.encrypt(data);
      localStorage.setItem(key, encrypted);
    } catch (error) {
      console.error("Failed to store encrypted data:", error);
      throw new Error("Failed to store data securely");
    }
  }

  // Retrieve and decrypt data
  static async getItem(key) {
    try {
      const encrypted = localStorage.getItem(key);
      if (!encrypted) return null;

      return await this.decrypt(encrypted);
    } catch (error) {
      console.error("Failed to retrieve encrypted data:", error);
      return null;
    }
  }

  // Remove encrypted data
  static removeItem(key) {
    localStorage.removeItem(key);
  }

  // Clear all secure storage data
  static clear() {
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (
        key.startsWith("auth_") ||
        key === "_sec_salt" ||
        key === "session_active"
      ) {
        localStorage.removeItem(key);
      }
    });
  }

  // Validate data integrity
  static async validateIntegrity(key) {
    try {
      const data = await this.getItem(key);
      return data !== null;
    } catch {
      return false;
    }
  }
}

export default SecureStorage;
