// Upload file to Google Drive using fetch API (browser-compatible)
export const uploadFileToDrive = async (file, accessToken, folderId = null) => {
  try {
    console.log("Starting file upload to Drive, folder ID:", folderId)

    // Create file metadata
    const metadata = {
      name: file.name,
      mimeType: file.type,
    }

    // Add the folder ID to the parents array if provided
    if (folderId) {
      metadata.parents = [folderId]
      console.log("Using specified folder ID:", folderId)
    } else {
      console.log("No folder ID provided, uploading to root")
    }

    // Step 1: Create a metadata request to create the file
    console.log("Creating file metadata...")
    const metadataResponse = await fetch("https://www.googleapis.com/drive/v3/files", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(metadata),
    })

    if (!metadataResponse.ok) {
      const errorData = await metadataResponse.json().catch(() => ({}))
      console.error("Metadata creation error details:", errorData)
      throw new Error(`Failed to create file metadata: ${metadataResponse.status} ${metadataResponse.statusText}`)
    }

    const fileData = await metadataResponse.json()
    const fileId = fileData.id
    console.log("File metadata created, ID:", fileId)

    // Step 2: Upload the file content
    console.log("Uploading file content...")
    const contentResponse = await fetch(`https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": file.type,
      },
      body: file,
    })

    if (!contentResponse.ok) {
      const errorData = await contentResponse.json().catch(() => ({}))
      console.error("Content upload error details:", errorData)
      throw new Error(`Failed to upload file content: ${contentResponse.status} ${contentResponse.statusText}`)
    }

    console.log("File content uploaded successfully")

    // Step 3: Set permissions
    console.log("Setting file permissions...")
    try {
      const permissionResponse = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: "reader",
          type: "anyone",
          withLink: true, // Changed to true to ensure the link is accessible
        }),
      })

      if (!permissionResponse.ok) {
        console.warn("Permission setting warning:", await permissionResponse.text())
      } else {
        console.log("File permissions set successfully")
      }
    } catch (permError) {
      console.warn("Error setting permissions, but continuing:", permError)
      // Continue even if permission setting fails
    }

    // Step 4: Get the file's web view link
    console.log("Getting file details...")
    const getFileResponse = await fetch(
      `https://www.googleapis.com/drive/v3/files/${fileId}?fields=webViewLink,webContentLink,name`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )

    if (!getFileResponse.ok) {
      console.warn("Warning: Could not get file details, using constructed link")
      // Return a constructed link even if we can't get the details
      return {
        id: fileId,
        name: file.name,
        link: `https://drive.google.com/file/d/${fileId}/view?usp=sharing`,
        viewLink: `https://drive.google.com/file/d/${fileId}/view?usp=sharing`,
      }
    }

    const fileDetails = await getFileResponse.json()
    console.log("File details retrieved:", fileDetails)

    return {
      id: fileId,
      name: fileDetails.name || file.name,
      link: fileDetails.webViewLink || `https://drive.google.com/file/d/${fileId}/view?usp=sharing`,
      viewLink: fileDetails.webViewLink || `https://drive.google.com/file/d/${fileId}/view?usp=sharing`,
    }
  } catch (error) {
    console.error("Error uploading file to Google Drive:", error)
    throw error
  }
}

// Update the getViewUrl function to be more reliable
export const getViewUrl = (url) => {
  try {
    const fileId = getFileIdFromUrl(url)
    if (!fileId) return url

    // Use a URL format that will be more reliable for viewing
    return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`
  } catch (error) {
    console.error("Error generating view URL:", error)
    return url
  }
}

// Improve the getFileIdFromUrl function to handle more URL formats
export const getFileIdFromUrl = (url) => {
  if (!url) return ""

  try {
    // Try to extract ID from various Google Drive URL formats
    if (url.includes("/file/d/")) {
      // Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
      const match = url.match(/\/file\/d\/([^/?]+)/)
      if (match && match[1]) return match[1]
    } else if (url.includes("id=")) {
      // Format: https://drive.google.com/open?id=FILE_ID
      const match = url.match(/id=([^&]+)/)
      if (match && match[1]) return match[1]
    } else {
      // Try to find any 25+ character alphanumeric string that might be an ID
      const matches = url.match(/[-\w]{25,}/)
      return matches ? matches[0] : ""
    }
  } catch (error) {
    console.error("Error extracting file ID:", error)
  }

  return ""
}

// Set default folder ID
export const setDefaultFolderId = (folderId) => {
  if (folderId) {
    localStorage.setItem("csuOcidFolderId", folderId)
    return true
  }
  return false
}

// Get default folder ID
export const getDefaultFolderId = () => {
  return localStorage.getItem("csuOcidFolderId") || "1qoOqskSB5oVcL7FEeP9WuBDoUyoxqWTr" // Your provided folder ID as default
}
