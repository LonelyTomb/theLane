import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Layout, Text, withStyles, Icon} from '@ui-kitten/components';

const indicators = (route, eva) => {
  const {routes, currentRoute} = route;
  const dots = [];
  for (let i = 0; i < routes; i++) {
    dots.push(
      <Icon
        key={i}
        name={'circle'}
        style={{
          ...eva.style.icon,
          color:
            currentRoute === i
              ? eva.style.activeIcon.color
              : eva.style.icon.color,
        }}
        pack={'material'}
        fill="#8F9BB3"
      />,
    );
  }
  return dots;
};

const BottomNavComponent = ({route, callback, eva}) => {
  const {routes, currentRoute} = route;
  return (
    <>
      <Layout style={eva.style.wrapper}>
        <Layout style={eva.style.layout}>
          <Layout style={eva.style.iconWrapper}>
            {indicators(route, eva)}
          </Layout>
          {routes !== currentRoute + 1 && (
            <TouchableOpacity onPress={callback}>
              <Text style={eva.style.nextButton}>Next</Text>
            </TouchableOpacity>
          )}
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
    color: '#797A7B',
    marginRight: 5,
  },
  activeIcon: {
    color: theme['color-primary-400'],
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
