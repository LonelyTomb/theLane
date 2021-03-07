import React, {useState} from 'react';
import {Layout, ViewPager, StyleService} from '@ui-kitten/components';
import Welcome from './../../components/onboarding/Welcome';
import Info from './../../components/onboarding/Info';
import Login from './../../components/onboarding/Login';
import BottomNav from '../../components/onboarding/BottomNav';

const OnBoarding = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const shouldLoadComponent = (index) => index === selectedIndex;

  const screens = [
    {Component: Welcome, callback: null},
    {
      Component: Info,
      callback: () => {
        setSelectedIndex(0);
      },
    },
    {
      Component: Login,
      callback: () => {
        setSelectedIndex(1);
      },
    },
  ];

  return (
    <ViewPager
      shouldLoadComponent={shouldLoadComponent}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
      style={styles.pager}>
      {screens.map(({Component, callback}, i) => (
        <Layout level="2" style={styles.layout} key={i}>
          <Component callback={callback} />
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
