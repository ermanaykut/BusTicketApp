import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';



import {PaperProvider} from 'react-native-paper';
import { Login, OnePlusTwo, PaymentScreen, Register, SplashScreen, TwoPlusTwo } from '../screens';
import CalendarScreen from '../screens/CalendarScreen';
import BusList from '../screens/BusList';



const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
          <Stack.Screen name="BusList" component={BusList} />
          <Stack.Screen name="OnePlusTwo" component={OnePlusTwo} />
          <Stack.Screen name="TwoPlusTwo" component={TwoPlusTwo} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Router;
