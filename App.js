import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homescreen from './screen/Homescreen';
import JadPenerbangan from './screen/JadPenerbangan';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Homescreen" component={Homescreen} options={{ headerShown: false }}/>
        <Stack.Screen name="JadPenerbangan" component={JadPenerbangan} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}