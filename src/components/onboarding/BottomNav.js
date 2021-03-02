import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Layout, Text, withStyles, Icon} from '@ui-kitten/components';

const indicators = (eva) => {
  const dots = [];
  for (let i = 0; i < 4; i++) {
    dots.push(
      <Icon
        key={i}
        name={'radio-button-off'}
        style={eva.style.icon}
        fill="#8F9BB3"
      />,
    );
  }
  return dots;
};

const BottomNavComponent = ({eva}) => {
  return (
    <>
      <Layout style={eva.style.wrapper}>
        <Layout style={eva.style.layout}>
          <Layout style={eva.style.iconWrapper}>{indicators(eva)}</Layout>
          <TouchableOpacity>
            <Text style={eva.style.nextButton}>Next</Text>
          </TouchableOpacity>
        </Layout>
      </Layout>
    </>
  );
};

const BottomNav = withStyles(BottomNavComponent, (theme) => ({
  nextButton: {
    color: theme['color-primary-400'],
  },
  icon: {
    width: 8,
    height: 8,
  },
  iconWrapper: {
    flexDirection: 'row',
  },
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default BottomNav;
