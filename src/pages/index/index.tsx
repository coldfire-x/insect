import Taro, { useState } from 'taro';
import { View, Button } from '@tarojs/components';
import { uploadToOSS } from '../../services/oss';
import { recognizeInsect } from '../../services/api';
import Camera from '../../components/Camera/Camera';

const Index = () => {
  const [image, setImage] = useState<string>('');

  const handleCapture = async (imageData: string) => {
    try {
      const imageUrl = await uploadToOSS(imageData);
      const result = await recognizeInsect(imageUrl);
      Taro.navigateTo({
        url: `/pages/result/result?result=${encodeURIComponent(result)}`,
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View className="index">
      <Camera onCapture={handleCapture} />
      <Button className="upload-button" onClick={() => Taro.navigateTo({ url: '/pages/result/result' })}>
        Upload Image
      </Button>
    </View>
  );
};

export default Index;