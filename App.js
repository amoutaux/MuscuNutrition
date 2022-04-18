import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {UserContextProvider} from './src/UserContextManagement.js';
import RootStackNavigator from './src/navigation/RootStackNavigator.js';

const App = () => {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <RootStackNavigator />
      </UserContextProvider>
    </NavigationContainer>
  );
};

export default App;
