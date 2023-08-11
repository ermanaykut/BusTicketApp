import React, {useState} from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';


import {Button, Icon, Input} from 'custom-components/src';
import styles from './style';
import {TextInput} from 'react-native-paper';
;
import {useNavigation} from '@react-navigation/native';
import colors from '../../style/colors';

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigation = useNavigation<any>();

  const navigateTo = (route: string) => {
    navigation.navigate(route);
  };
  const onPressBack = () => {
    navigation.goBack();}
  
  return (
    <SafeAreaView style={styles.container}>
       <Pressable onPress={onPressBack}>
        <Icon name="chevron-left : entypo" size={40} color={colors.lightBlue} />
      </Pressable>
      <Image style={styles.logo} source={require('../../assets/bus.png')}/>
        <View style={styles.mainContainer}>

        <Text style={styles.text}>Welcome back</Text>
        <View style={styles.inputContainer}>
          <Input
            mode="flat"
            style={styles.input}
            label={'Phone number'}
            otherProps={{
              activeUnderlineColor: colors.grey,
              underlineColor: colors.grey,
            }}
            />
          <Input
            mode="flat"
            style={styles.input}
            label={'Password'}
            right={
              <TextInput.Icon
              icon={() => (
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                    <Icon
                      name={!showPassword ? 'ios-eye-outline : ion' : 'ios-eye-off-outline : ion'}
                      size={30}
                      color={colors.lightBlue}
                      />
                  </Pressable>
                )}
                />
              }
              otherProps={{
                secureTextEntry: !showPassword,
                activeUnderlineColor: colors.grey,
                underlineColor: colors.grey,
              }}
              />
        </View>
        <Text style={styles.forgotText}>Forgot Password ?</Text>
        <Button
          text="Log In"
          onPress={() => navigateTo('BondBottomNavigator')}
          backgroundColor={colors.lightBlue}
          h={50}
          w={'50%'}

          textStyle={{color: colors.white, fontSize: 16}}
          containerStyle={styles.buttons}
          
          />
        <Text style={styles.or}>dont have an account</Text>
        <Button
          text="Sign Up"
          onPress={() => navigateTo('Register')}
          h={50}
          textStyle={{color: colors.lightBlue, fontSize: 16}}
          containerStyle={styles.buttons}
          backgroundColor={colors.intro}
          />
          </View>

    </SafeAreaView>
  );
};

export default Login;