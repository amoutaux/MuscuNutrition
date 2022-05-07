import React, {useContext} from 'react';
import {View} from 'react-native';

import {UserContext} from '../UserContextManagement.js';
import ObjectiveTable from '../components/ObjectiveTable.js';
import {getObjectives} from '../utils.js';
import styles from '../styles/MealsScreen.style.js';

const MealsScreen = () => {
  const user = useContext(UserContext);
  const weightGainObjectives = getObjectives(
    user.protMultiplier,
    user.lipMultiplier,
    user.fatPercentage,
    user.weightKg,
    user.weightGainObjective,
  );
  const weightLossObjectives = getObjectives(
    user.protMultiplier,
    user.lipMultiplier,
    user.fatPercentage,
    user.weightKg,
    user.weightLossObjective,
  );

  return (
    <View style={styles.container}>
      <ObjectiveTable
        objective={'seche'}
        totalKcal={user.weightLossObjective}
        entries={weightLossObjectives}
      />
      <ObjectiveTable
        objective={'prise de masse'}
        totalKcal={user.weightGainObjective}
        entries={weightGainObjectives}
      />
    </View>
  );
};

export default MealsScreen;
