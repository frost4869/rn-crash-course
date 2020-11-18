import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const HeaderCenterComponent = ({children, ...props}) => (
  <View {...props} style={[styles.centerContainer, props.style]}>
    {children}
  </View>
);

export default HeaderCenterComponent;
