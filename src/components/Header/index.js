import React from 'react';
import {View} from 'react-native';
import HeaderCenterComponent from './Header.Center';
import HeaderLeftComponent from './Header.Left';
import HeaderRightComponent from './Header.Right';
import styles from './styles';

const Header = ({style, ...props}) => {
  const combinedStyles = [styles.container, style];
  return (
    <View {...props} style={combinedStyles}>
      {props.children}
    </View>
  );
};

Header.Left = HeaderLeftComponent;
Header.Center = HeaderCenterComponent;
Header.Right = HeaderRightComponent;

export default Header;
