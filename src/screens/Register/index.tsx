import React, {useState} from 'react';
import {Image, LogBox, Pressable, SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
import {Button, Icon, Input} from 'custom-components/src';



import styles from './style';
import colors from '../../style/colors';


LogBox.ignoreAllLogs()

const Register = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigation = useNavigation<any>();

  const navigateTo = (route:string) => {
    navigation.navigate(route);
  };

  return (
    <SafeAreaView style={styles.container}>

      <Image style={styles.logo} source={require('../../assets/bus.png')}/>
      
      <View style={ styles.mainContainer}>
        <Text style={styles.title}>Your Information</Text>
        <Text style={styles.exploreText}>
          Create a free account to explore bond.
        </Text>
        <View style={styles.inputContainer}>
          <Input
            mode="flat"
            style={styles.input}
            label={'Username'}
            otherProps={{
              activeUnderlineColor: colors.grey,
              underlineColor: colors.grey,
            }}
          />
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
          <Button
            text="Register"
            onPress={()=>navigateTo('Login')}
            backgroundColor={colors.lightBlue}
            mt={40}
            mb={50}
            h={50}
            w={'50%'}
            textStyle={{color: colors.white, fontSize: 18}}
            containerStyle={styles.buttons}
          />
          <Text
            style={{
              textAlign: 'center',
              width: '70%',
              alignSelf: 'center',
              color: colors.grey,
            }}>
            By signing up, you agree to Bond's{' '}
            <Text style={{color: colors.lightBlue}}>Term of Service</Text> and{' '}
            <Text style={{color: colors.lightBlue}}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;