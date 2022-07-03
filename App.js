import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import Home from './screen/Home';
import Details from './screen/Details';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {
  const [loaded] = useFonts({
    
  })
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Details' component={Details}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
