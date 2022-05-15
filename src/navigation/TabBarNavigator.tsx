import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MealsScreen from './MealsScreen';
import GraphsScreen from './GraphsScreen';
import FoodScreen from './FoodScreen';

const Tab = createBottomTabNavigator();

const TabBarNavigator: React.FC = () => {
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
