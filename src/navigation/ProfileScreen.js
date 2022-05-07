import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {UserContext} from '../UserContextManagement.js';
import NumberInput from '../components/NumberInput.js';

const ProfileScreen = () => {
  const user = useContext(UserContext);

  return (
    <View>
      <View>
        <NumberInput
          label="Poids"
          unit="Kg"
          value={user.weightKg || ''}
          onChangeText={text => user.setWeightKg(text.replace(',', '.'))}
        />
        <NumberInput
          label="Taux de graisse"
          unit="%"
          value={user.fatPercentage || ''}
          onChangeText={text => user.setFatPercentage(text.replace(',', '.'))}
        />
        <NumberInput
          label="Multiplicateur d'activité"
          value={user.activityMultiplier || ''}
          onChangeText={text => user.setActivityMultiplier(text.replace(',', '.'))}
        />
        <NumberInput
          label="Objectif prise de masse"
          unit="%"
          value={user.weightGainPercentage || ''}
          onChangeText={text => user.setWeightGainPercentage(text.replace(',', '.'))}
        />
        <NumberInput
          label="Objectif sèche"
          unit="%"
          value={user.weightLossPercentage || ''}
          onChangeText={text => user.setWeightLossPercentage(text.replace(',', '.'))}
        />
        <NumberInput
          label="Coefficient Protéines"
          value={user.protMultiplier || ''}
          onChangeText={text => user.setProtMultiplier(text.replace(',', '.'))}
        />
        <NumberInput
          label="Coefficient Lipides"
          value={user.lipMultiplier || ''}
          onChangeText={text => user.setLipMultiplier(text.replace(',', '.'))}
        />
      </View>
      <View>
        <Text>Maintenance: {user.maintenance}</Text>
        <Text>Objectif Prise de masse: {user.weightGainObjective}</Text>
        <Text>Objectif sèche: {user.weightLossObjective}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
