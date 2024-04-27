import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import Index from './pages/index/index';

import './app.scss';

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/result/result',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Taro App',
      navigationBarTextStyle: 'black',
    },
  };

  render() {
    return (
      <View className="app">
        <Index />
      </View>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));