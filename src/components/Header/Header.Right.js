import React from 'react';
import {View} from 'react-native';

const HeaderRightComponent = ({children, ...props}) => (
  <View {...props}>{children}</View>
);

export default HeaderRightComponent;
