import React, {useState, useCallback} from 'react';
import {Layout, ViewPager, StyleService} from '@ui-kitten/components';
import Welcome from './../../components/onboarding/Welcome';
import Info from './../../components/onboarding/Info';
import SignUp from './../../components/onboarding/SignUp';
import BottomNav from '../../components/onboarding/BottomNav';

const OnBoarding = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const shouldLoadComponent = (index) => index === selectedIndex;

  const screens = [
    {
      Component: Welcome,
      props: {
        callback: null,
        skipCallback: () => {
          navigation.navigate('Login');
        },
      },
    },
    {
      Component: Info,
      props: {
        callback: () => {
          setSelectedIndex(0);
        },
        skipCallback: () => {
          navigation.navigate('Login');
        },
      },
    },
    {
      Component: SignUp,
      props: {
        callback: () => {
          setSelectedIndex(1);
        },
        skipCallback: () => {
          navigation.navigate('Login');
        },
        successCallback: () => {
          navigation.navigate('Home');
        },
      },
    },
  ];

  return (
    <ViewPager
      shouldLoadComponent={shouldLoadComponent}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
      style={styles.pager}>
      {screens.map(({Component, props}, i) => (
        <Layout level="2" style={styles.layout} key={i}>
          <Component {...props} />
          <BottomNav
            route={{currentRoute: i, routes: screens.length}}
            callback={() => {
              setSelectedIndex(i + 1);
            }}
          />
        </Layout>
      ))}
    </ViewPager>
  );
};
const styles = StyleService.create({
  pager: {
    flex: 1,
  },
  layout: {
    height: '100%',
  },
});
export default OnBoarding;
