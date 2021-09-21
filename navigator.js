/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {
  Icon,
  BottomNavigation,
  BottomNavigationTab,
} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import OnBoarding from './src/screens/onboarding/OnBoarding';
import Login from './src/screens/Login';
import Home from './src/screens/home/Home';
import Browse from './src/screens/home/Browse';
import Settings from './src/screens/Settings';

import SplashScreen from 'react-native-splash-screen';
import isLoggedIn from './src/hooks/isLoggedIn';

const {Navigator: SNavigator, Screen: SScreen} = createStackNavigator();
const {Navigator: TNavigator, Screen: TScreen} = createBottomTabNavigator();

const HomeIcon = (props) => {
  return <Icon {...props} name={'home'} pack={'material'} />;
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
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000);
    }
  }, [token, loading]);

  return (
    <NavigationContainer>
      <SNavigator>
        {token ? (
          <>
            <SScreen
              name={'Home'}
              component={HomeTabs}
              options={{headerShown: false}}
            />
            <SScreen
              name={'Settings'}
              component={Settings}
              options={{mode: 'modal'}}
            />
          </>
        ) : (
          <>
            <SScreen
              name={'onBoarding'}
              component={onBoarding}
              options={{headerShown: false}}
            />
            <SScreen
              name={'Login'}
              component={Login}
              options={{headerShown: false}}
            />
          </>
        )}
      </SNavigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
