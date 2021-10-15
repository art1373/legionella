import React from 'react';
import {View} from 'react-native';
import {Helpers} from '../../Theme';

const Container = ({children}: {children: React.ReactNode}) => {
  return <View style={[Helpers.fill]}>{children}</View>;
};

export default Container;
