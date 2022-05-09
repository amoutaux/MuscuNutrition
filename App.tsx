import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {UserContextProvider} from './src/UserContextManagement';
import RootStackNavigator from './src/navigation/RootStackNavigator';

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
