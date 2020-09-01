import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native';

import Screen_Landing from './components/Screen_Landing/Screen_Landing'
import Screen_SignUp from './components/Screen_SignUp/Screen_SignUp'
import Screen_SignIn from './components/Screen_SignIn/Screen_SignIn'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen_Landing">
        <Stack.Screen
          name="Screen_Landing"
          component={Screen_Landing}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Screen_SignUp" component={Screen_SignUp}
        options={{ title: 'Sign Up' }}
        />
        <Stack.Screen name="Screen_SignIn" component={Screen_SignIn}
        options={{ title: 'Sign In' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
