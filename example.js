
const FileManager = require('filemanagers');

(async () => {
  const fileManager = new FileManager('https://dns.cloudcoderhub.in', 'your-api-key-here');

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
