import React from 'react';
import {AppNavigator} from '../../Navigators/AppNavigator';
import {SafeAreaView} from 'react-native';
import {Helpers} from '../../Theme';

const RootScreen = () => (
  <SafeAreaView style={Helpers.fill}>
    <AppNavigator />
  </SafeAreaView>
);

export default RootScreen;
