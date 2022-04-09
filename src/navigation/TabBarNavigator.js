import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MealsScreen from './MealsScreen.js';
import GraphsScreen from './GraphsScreen.js';
import FoodScreen from './FoodScreen.js';

const Tab = createBottomTabNavigator();

const TabBarNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="meals" component={MealsScreen} />
      <Tab.Screen
        name="graphs"
        component={GraphsScreen}
        options={{title: 'graphsTitle'}}
      />
      <Tab.Screen
        name="food"
        component={FoodScreen}
        options={{title: 'foodTitle'}}
      />
    </Tab.Navigator>
  );
};

export default TabBarNavigator;
