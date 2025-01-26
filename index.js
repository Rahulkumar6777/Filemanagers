const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

class FileManager {
  constructor(baseUrl, apiKey) {
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    });
  }

  // Register a user
  async registerUser() {
    const response = await this.client.post('/api/users/register');
    return response.data;
  }

  // Upload a file (image, video, audio)
  async uploadFile(filePath) {
    const form = new FormData();
    form.append('file', fs.createReadStream(filePath));

    try {
      const response = await this.client.post('/api/files/upload', form, {
        headers: {
          ...form.getHeaders(),
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error uploading file:', error.response?.data || error.message);
      throw error;
    }
  }

  // Get all files
  async getFiles() {
    const response = await this.client.get('/api/files/files');
    return response.data;
  }

  // Delete a file
  async deleteFile(fileId) {
    try {
      const response = await this.client.delete(`/api/files/${fileId}/delete`);
      return response.data;
    } catch (error) {
      console.error('Error deleting file:', error.response?.data || error.message);
      throw error;
    }
  }
}

module.exports = FileManager;
