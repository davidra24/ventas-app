import React from 'react';
import { YellowBox } from 'react-native';
import Navigation from './src/routes';
import { firebaseApp } from './src/utils/firebase';

YellowBox.ignoreWarnings(['Setting a timer']);

const App = () => {
  firebaseApp();
  return <Navigation />;
}

export default App