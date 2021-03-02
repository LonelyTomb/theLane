import React, {useState} from 'react';
import {Layout, ViewPager} from '@ui-kitten/components';
import Welcome from './../../components/onboarding/Welcome';
import Info from './../../components/onboarding/Info';
import BottomNav from '../../components/onboarding/BottomNav';

const OnBoarding = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
      style={{flex: 1}}>
      <Layout level="2" style={{height: '100%'}}>
        <Welcome />
        <BottomNav
          route={{currentRoute: 0, routes: 4}}
          callback={() => {
            setSelectedIndex(1);
          }}
        />
      </Layout>
      <Layout level="2" style={{height: '100%'}}>
        <Info
          callback={() => {
            setSelectedIndex(0);
          }}
        />
        <BottomNav
          route={{currentRoute: 1, routes: 4}}
          callback={() => {
            setSelectedIndex(2);
          }}
        />
      </Layout>
    </ViewPager>
  );
};
export default OnBoarding;
