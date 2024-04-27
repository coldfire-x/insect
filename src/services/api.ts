import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with the actual API URL

export async function recognizeInsects(image: File): Promise<string> {
  try {
    const formData = new FormData();
    formData.append('image', image);

    const response = await axios.post(`${API_URL}/recognize`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error recognizing insects:', error);
    throw new Error('Failed to recognize insects');
  }
}