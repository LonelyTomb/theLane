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
import {default as mapping} from './mapping.json';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {MaterialIconsPack} from './icons/material-icons';

import OnBoarding from './src/screens/onboarding/OnBoarding';

const {Navigator: SNavigator, Screen: SScreen} = createStackNavigator();
// const {Navigator: TNavigator, Screen: TScreen} = createBottomTabNavigator();
const onBoarding = () => {
  return (
    <SNavigator headerMode={false}>
      <SScreen
        name={'OnBoarding'}
        component={OnBoarding}
        options={{gestureEnabled: true}}
      />
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
      <IconRegistry icons={[MaterialIconsPack, EvaIconsPack]} />
      <ApplicationProvider
        {...eva}
        theme={{...eva.light, ...theme}}
        customMapping={mapping}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
};
