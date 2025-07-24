class DevToolsDetection {
  static isDevToolsOpen() {
    const threshold = 160;

    return (
      window.outerHeight - window.innerHeight > threshold ||
      window.outerWidth - window.innerWidth > threshold ||
      // Check for console.clear override (common DevTools detection)
      (typeof console.clear === "function" &&
        console.clear.toString().includes("[native code]") === false)
    );
  }

  static addDevToolsWarning() {
    if (this.isDevToolsOpen()) {
      console.warn(
        "%cDeveloper Tools Detected!",
        "color: red; font-size: 20px; font-weight: bold;"
      );
      console.warn(
        "Opening DevTools may cause authentication issues due to security measures. " +
          "If you experience logout issues, please close DevTools and refresh the page."
      );
    }
  }
}

export default DevToolsDetection;
