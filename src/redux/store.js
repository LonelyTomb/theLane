import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import monitorReducerEnhancer from './enhancers/monitorReducers';
import rootReducers from './reducers';

export default function configureAppStore(preloadedState = {}) {
  const enhancers = [monitorReducerEnhancer];
  const store = configureStore({
    reducer: rootReducers,
    middleware: [...getDefaultMiddleware()],
    preloadedState,
    enhancers,
  });
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducers));
  }
  return store;
}
