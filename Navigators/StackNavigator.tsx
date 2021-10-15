import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../Theme';
import Home from '../Containers/Home/Home';
import {HomeRoutes} from '../utils/constants';
import Detail from '../Containers/Detail/Detail';

const Stack = createStackNavigator();
export const MainStack = () => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTitleStyle: {color: Colors.secondary},
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerShown: false,
      }}>
      <Stack.Screen name={HomeRoutes.HOME} component={Home} />
      <Stack.Screen name={HomeRoutes.DETAIL} component={Detail} />
    </Stack.Navigator>
  );
};
