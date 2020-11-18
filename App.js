/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/container/Home';
const App: () => React$Node = () => {
  // const callNativeModule = () => {
  //   var CalculatorManager = NativeModules.CalculatorManager;
  //   CalculatorManager.callNative(function callbackFunction(dataFromNativeSide) {
  //     debugger;
  //     console.log('dataFromNativeSide :>> ', dataFromNativeSide);
  //   });
  // };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
