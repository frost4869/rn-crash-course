/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/container/Home';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation';

const App: () => React$Node = () => {
  // const callNativeModule = () => {
  //   var CalculatorManager = NativeModules.CalculatorManager;
  //   CalculatorManager.callNative(function callbackFunction(dataFromNativeSide) {
  //     debugger;
  //     console.log('dataFromNativeSide :>> ', dataFromNativeSide);
  //   });
  // };

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000"/>
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <RootNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
