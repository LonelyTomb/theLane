/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as theme} from './theme.json';
import {default as mapping} from './mapping.json';

import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {MaterialIconsPack} from './icons/material-icons';
import {Provider} from 'react-redux';
import configureAppStore from './src/redux/store';
import AppNavigator from './navigator';

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
