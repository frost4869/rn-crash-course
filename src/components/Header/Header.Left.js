import React from 'react';
import {View} from 'react-native';

const HeaderLeftComponent = ({children, ...props}) => (
  <View {...props}>{children}</View>
);

export default HeaderLeftComponent;
