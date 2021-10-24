import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../screens/Home.screen';
import {DocumentsWalletScreen} from '../screens/DocumentsWallet.screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="DocumentsWalletScreen"
          component={DocumentsWalletScreen}
          options={{title: 'My Documents'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
