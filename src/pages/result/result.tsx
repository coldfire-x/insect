import Taro, { useState, useEffect } from 'react';
import { View, Image, Text } from '@tarojs/components';
import { getInsectRecognitionResult } from '../../services/api';
import { getWikiInfo } from '../../services/baiduBaike';
import './result.scss';

const Result = () => {
  const [result, setResult] = useState('');
  const [wikiInfo, setWikiInfo] = useState('');

  useEffect(() => {
    // Call API to recognize insects in the picture
    const recognizeInsects = async () => {
      try {
        const recognitionResult = await getInsectRecognitionResult();
        setResult(recognitionResult);

        // Call Baidu Baike API to get wiki info
        const info = await getWikiInfo(recognitionResult);
        setWikiInfo(info);
      } catch (error) {
        console.error('Error recognizing insects:', error);
      }
    };

    recognizeInsects();
  }, []);

  return (
    <View className="result">
      <View className="result-image">
        <Image src={result} mode="aspectFit" />
      </View>
      <View className="result-info">
        <Text className="result-text">{wikiInfo}</Text>
      </View>
    </View>
  );
};

export default Result;