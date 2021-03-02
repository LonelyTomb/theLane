/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as theme} from './theme.json';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import Welcome from './src/screens/onboarding/Welcome';

const {Navigator: SNavigator, Screen: SScreen} = createStackNavigator();

const onBoarding = () => {
  return (
    <SNavigator headerMode={'none'}>
      <SScreen name={'Welcome'} component={Welcome} />
    </SNavigator>
  );
};
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <SNavigator headerMode={'none'}>
        <SScreen name={'onBoarding'} component={onBoarding} />
      </SNavigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
};
