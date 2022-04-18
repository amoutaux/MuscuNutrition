import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabBarNavigator from './TabBarNavigator.js';
import ProfileScreen from './ProfileScreen.js';
import ProfileButton from '../components/ProfileButton.js';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabBarNavigator"
        component={TabBarNavigator}
        options={({navigation, route}) => ({
          headerLeft: () => <ProfileButton />,
        })}
      />
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{title: 'profileTitle'}}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
