# FileManager API Documentation

This API allows users to register, upload, list, and delete files on a server. Below is a quick guide to using the `FileManager` class to interact with the API.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.
- **API Key**: Obtain an API key from the server.
- **Server Access**: Ensure the server is running and accessible at `dns.cloudcoderhub.in` (or your server's URL).

## Installation

Install the `filemanagers` package or ensure it is available:

```bash
npm install filemanagers
```

## Usage

### 1. Register a User
To use the API, you'll first need to register a user.

```javascript
const FileManager = require('filemanagers');

(async () => {
  const fileManager = new FileManager('dns.cloudcoderhub.in', 'your-api-key-here');

  // Register a user
  const user = await fileManager.registerUser();
  console.log('User Registered:', user);
})();
```

### 2. Upload a File
To upload a file (e.g., an image, video, or audio), specify the file path and call the `uploadFile` method.

```javascript
const FileManager = require('filemanagers');

(async () => {
  const fileManager = new FileManager('dns.cloudcoderhub.in', 'your-api-key-here');

  // Upload a file
  const filePath = '/path/to/your/file/1.jpg'; // Path to the image/video/audio file
  try {
    const uploadResponse = await fileManager.uploadFile(filePath);
    console.log('File Uploaded:', uploadResponse);
  } catch (error) {
    console.error('File upload failed:', error.message);
  }
})();
```

### 3. List Files
To list the files uploaded by the user, use the `getFiles` method.

```javascript
const FileManager = require('filemanagers');

(async () => {
  const fileManager = new FileManager('dns.cloudcoderhub.in', 'your-api-key-here');

  // List files
  const files = await fileManager.getFiles();
  console.log('User Files:', files);
})();
```

### 4. Delete a File
To delete a file, specify the file ID and use the `deleteFile` method.

```javascript
const FileManager = require('filemanagers');

(async () => {
  const fileManager = new FileManager('dns.cloudcoderhub.in', 'your-api-key-here');

  // Delete a file
  const fileId = 173; // Replace with the actual file ID you want to delete
  const deleteResponse = await fileManager.deleteFile(fileId);
  console.log('File Deleted:', deleteResponse);
})();
```

## API Methods

### `registerUser()`
- **Description**: Registers a new user.
- **Returns**: The user object with the user’s details.

### `uploadFile(filePath)`
- **Description**: Uploads a file to the server.
- **Parameters**: `filePath` (string) – Path to the file on the local system.
- **Returns**: The response from the server, indicating success or failure.

### `getFiles()`
- **Description**: Retrieves the list of files uploaded by the user.
- **Returns**: A list of file objects.

### `deleteFile(fileId)`
- **Description**: Deletes a file by its ID.
- **Parameters**: `fileId` (number) – ID of the file to be deleted.
- **Returns**: The response from the server after the deletion.

## Example Flow

```javascript
const FileManager = require('filemanagers');

(async () => {
  const fileManager = new FileManager('dns.cloudcoderhub.in', 'your-api-key-here');

  // Step 1: Register a user
  const user = await fileManager.registerUser();
  console.log('User Registered:', user);

  // Step 2: Upload a file
  const filePath = '/path/to/your/file/video.mp4';
  const uploadResponse = await fileManager.uploadFile(filePath);
  console.log('File Uploaded:', uploadResponse);

  // Step 3: List files
  const files = await fileManager.getFiles();
  console.log('User Files:', files);

  // Step 4: Delete a file
  const fileId = files[0].id; // Assuming you want to delete the first file
  const deleteResponse = await fileManager.deleteFile(fileId);
  console.log('File Deleted:', deleteResponse);
})();
```

## Notes

- **File Path**: Ensure that the file path is correct. It should be the absolute or relative path to the file you want to upload.
- **File Type**: The server should support uploading different types of files (e.g., images, videos, audio). Check server-side code for supported file types and limits.
- **Error Handling**: Use `try-catch` blocks to handle errors gracefully, such as issues with file uploads or deletions.

## Additional Considerations

- **Security**: Ensure that only authorized users can upload or delete files. Consider implementing user authentication.
- **File Limits**: The server may have restrictions on file sizes or types. Verify server configurations for any limitations.

---

Feel free to contribute to this repository by submitting issues or pull requests!

