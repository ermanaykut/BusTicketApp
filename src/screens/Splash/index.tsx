import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import RoadAnimation from '../../components/LottieGif/RoadAnimation';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation<any>();

  const navToHome = () => {
    navigation.navigate('CalendarScreen');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/bus.png')} />
      <RoadAnimation />
      <TouchableOpacity
        onPress={navToHome}
        activeOpacity={0.8}
        style={styles.buttonContainer}>
        <Text style={styles.text}>GİRİŞ YAP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;