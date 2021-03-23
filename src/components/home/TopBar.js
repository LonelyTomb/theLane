import React from 'react';
import {
  Text,
  TopNavigation,
  TopNavigationAction,
  StyleService,
  Icon,
  useTheme,
} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

const TopBar = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const styles = StyleService.create({
    header: {},
    title: {
      fontWeight: '700',
      color: theme['color-primary-600'],
    },
  });

  const SearchIcon = (props) => {
    return <Icon {...props} name={'search-outline'} pack={'eva'} />;
  };

  const SettingIcon = (props) => {
    return <Icon {...props} name={'settings-outline'} pack={'eva'} />;
  };

  const SearchAction = () => {
    return (
      <TopNavigationAction
        icon={SearchIcon}
        onPress={() => {
          navigation.navigate('Browse');
        }}
      />
    );
  };

  const SettingAction = () => {
    return (
      <TopNavigationAction
        icon={SettingIcon}
        onPress={() => {
          navigation.navigate('Settings');
        }}
      />
    );
  };
  return (
    <>
      <TopNavigation
        headerTransparent={true}
        alignment={'center'}
        title={(props) => (
          <Text {...props} style={styles.title}>
            theLane
          </Text>
        )}
        style={styles.header}
        headerStyle={styles.header}
        accessoryLeft={SearchAction}
        accessoryRight={SettingAction}
      />
    </>
  );
};

export default TopBar;
