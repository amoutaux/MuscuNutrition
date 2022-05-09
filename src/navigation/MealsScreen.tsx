import React, {useContext} from 'react';
import {View} from 'react-native';

import {UserContext} from '../UserContextManagement';
import ObjectiveTable from '../components/ObjectiveTable';
import {getObjectives} from '../utils';
import styles from '../styles/MealsScreen.style';

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
