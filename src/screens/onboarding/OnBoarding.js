import React, {useState} from 'react';
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
      callback: null,
      skipCallback: () => {
        navigation.navigate('Login');
      },
    },
    {
      Component: Info,
      callback: () => {
        setSelectedIndex(0);
      },
      skipCallback: () => {
        navigation.navigate('Login');
      },
    },
    {
      Component: SignUp,
      callback: () => {
        setSelectedIndex(1);
      },
      skipCallback: () => {
        navigation.navigate('Login');
      },
    },
  ];

  return (
    <ViewPager
      shouldLoadComponent={shouldLoadComponent}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
      style={styles.pager}>
      {screens.map(({Component, callback, skipCallback}, i) => (
        <Layout level="2" style={styles.layout} key={i}>
          <Component callback={callback} skipCallback={skipCallback} />
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
