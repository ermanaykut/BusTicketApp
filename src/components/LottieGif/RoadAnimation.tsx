import React from 'react';
import LottieView from 'lottie-react-native';

export default function RoadAnimation() {
  return (
    <LottieView
      style={{flex: 1}}
      source={require('../../assets/Lottie/RoadAnimation.json')}
      autoPlay
      loop
    />
  );
}