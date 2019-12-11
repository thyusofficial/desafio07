import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import Routes from './routes';
import Header from './components/Header';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </Provider>
  );
}
