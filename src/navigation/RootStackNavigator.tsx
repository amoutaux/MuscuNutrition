import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabBarNavigator from './TabBarNavigator';
import ProfileScreen from './ProfileScreen';
import ProfileButton from '../components/ProfileButton';

const Stack = createNativeStackNavigator();

const RootStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabBarNavigator"
        component={TabBarNavigator}
        options={() => ({
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
