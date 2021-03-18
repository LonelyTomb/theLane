/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as theme} from './theme.json';
import {default as mapping} from './mapping.json';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {MaterialIconsPack} from './icons/material-icons';
import {Provider, useSelector, useDispatch} from 'react-redux';
import configureAppStore from './src/redux/store';
import OnBoarding from './src/screens/onboarding/OnBoarding';
import Login from './src/screens/Login';
import Home from './src/screens/home/Home';
import Browse from './src/screens/home/Browse';
import SplashScreen from 'react-native-splash-screen';
import {AuthThunks} from './src/redux/thunks';

const {Navigator: SNavigator, Screen: SScreen} = createStackNavigator();
const {Navigator: TNavigator, Screen: TScreen} = createBottomTabNavigator();

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

const HomeTabs = () => {
  return (
    <TNavigator>
      <TScreen name={'Home'} component={Home} />
      <TScreen name={'Browse'} component={Browse} />
    </TNavigator>
  );
};

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const {verifyAuth} = AuthThunks;
  const {isLoggedIn} = useSelector((state) => state.auth);
  useEffect(() => {
    const confirmUser = async () => {
      await dispatch(verifyAuth());
    };
    confirmUser()
      .then(() => {
        setIsLoading(false);
        setLoggedIn(isLoggedIn);
      })
      .catch(() => {
        setLoggedIn(isLoggedIn);
        setIsLoading(false);
      });
  }, [dispatch, verifyAuth, isLoggedIn]);

  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hide();
    }
  }, [isLoading]);
  return (
    <NavigationContainer>
      <SNavigator headerMode={'none'}>
        {isLoggedIn ? (
          <SScreen name={'Home'} component={HomeTabs} />
        ) : (
          <>
            <SScreen name={'onBoarding'} component={onBoarding} />
            <SScreen name={'Login'} component={Login} />
          </>
        )}
      </SNavigator>
    </NavigationContainer>
  );
};

export default () => {
  const store = configureAppStore({});
  return (
    <>
      <IconRegistry icons={[MaterialIconsPack, EvaIconsPack]} />
      <Provider store={store}>
        <ApplicationProvider
          {...eva}
          theme={{...eva.light, ...theme}}
          customMapping={mapping}>
          <AppNavigator />
        </ApplicationProvider>
      </Provider>
    </>
  );
};
