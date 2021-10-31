import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../screens/Home.screen';
import {DocumentsWalletScreen} from '../screens/DocumentsWallet.screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* TODO: Recycle stack navigator latter on  */}
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="DocumentsWalletScreen"
          component={DocumentsWalletScreen}
          options={{title: 'My Documents'}}
        />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="DocumentsWalletScreen"
          component={DocumentsWalletScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
