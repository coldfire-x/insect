import { uploadFile } from 'baidu-yun-oss'; // Replace 'baidu-yun-oss' with the actual package name for Baidu Yun OSS

// Function to upload the picture to Baidu Yun OSS
export async function uploadToOSS(file: File): Promise<string> {
  try {
    const uploadResult = await uploadFile(file); // Replace 'uploadFile' with the actual function to upload the file to Baidu Yun OSS
    return uploadResult.url; // Return the URL of the uploaded file
  } catch (error) {
    console.error('Failed to upload file to Baidu Yun OSS:', error);
    throw error;
  }
}