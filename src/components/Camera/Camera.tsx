import Taro, { useState } from 'taro';
import { View, Button } from '@tarojs/components';
import { uploadImage } from '../../services/oss';
import { recognizeInsect } from '../../services/api';
import WikiInfo from '../WikiInfo/WikiInfo';

const Camera: Taro.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [insectInfo, setInsectInfo] = useState<any | null>(null);

  const takePicture = async () => {
    try {
      const res = await Taro.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['camera'],
      });

      const tempFilePath = res.tempFilePaths[0];
      setImage(tempFilePath);

      const imageUrl = await uploadImage(tempFilePath);
      const result = await recognizeInsect(imageUrl);
      setInsectInfo(result);
    } catch (error) {
      console.error('Failed to take picture:', error);
    }
  };

  return (
    <View>
      <Button onClick={takePicture}>Take Picture</Button>
      {image && <Image src={image} />}
      {insectInfo && <WikiInfo insectInfo={insectInfo} />}
    </View>
  );
};

export default Camera;