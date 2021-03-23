/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Icon,
  BottomNavigation,
  BottomNavigationTab,
} from '@ui-kitten/components';
import {default as theme} from './theme.json';
import {default as mapping} from './mapping.json';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {MaterialIconsPack} from './icons/material-icons';
import {Provider} from 'react-redux';
import configureAppStore from './src/redux/store';
import OnBoarding from './src/screens/onboarding/OnBoarding';
import Login from './src/screens/Login';
import Home from './src/screens/home/Home';
import Browse from './src/screens/home/Browse';
import SplashScreen from 'react-native-splash-screen';
import isLoggedIn from './src/hooks/isLoggedIn';

const {Navigator: SNavigator, Screen: SScreen} = createStackNavigator();
const {Navigator: TNavigator, Screen: TScreen} = createBottomTabNavigator();

const HomeIcon = (props) => {
  return <Icon {...props} name={'home-outline'} pack={'eva'} />;
};
const BrowseIcon = (props) => {
  return <Icon {...props} name={'book-open-outline'} pack={'eva'} />;
};

const BottomTabBar = ({navigation, state}) => {
  return (
    <BottomNavigation
      appearance={'noIndicator'}
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title={'Home'} icon={HomeIcon} />
      <BottomNavigationTab title={'Browse'} icon={BrowseIcon} />
    </BottomNavigation>
  );
};

const HomeTabs = () => {
  return (
    <TNavigator tabBar={(props) => <BottomTabBar {...props} />}>
      <TScreen name={'Home'} component={Home} />
      <TScreen name={'Browse'} component={Browse} />
    </TNavigator>
  );
};

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
  const [loading, token] = isLoggedIn();

  useEffect(() => {
    if (!loading) {
      SplashScreen.hide();
    }
  }, [token, loading]);
  return (
    <NavigationContainer>
      <SNavigator headerMode={'none'}>
        {token ? (
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
