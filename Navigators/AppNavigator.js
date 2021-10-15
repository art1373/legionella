import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef, isReadyRef} from '../Services/NavigationService';
import {MainStack} from './StackNavigator';
export const AppNavigator = () => {
  React.useEffect(() => {
    return () => (isReadyRef.current = false);
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <MainStack />
    </NavigationContainer>
  );
};
