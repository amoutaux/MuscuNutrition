import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {UserContext} from '../UserContextManagement';
import NumberInput from '../components/NumberInput';

const _textToNumber = (text: string): number | undefined => {
  if (text === '') {
    return undefined;
  }
  if (text) {
    return parseFloat(text.replace(',', '.'));
  }
  return 0;
};

const _numberToText = (n: number | undefined): string => {
  return n ? n + '' : '';
};

const ProfileScreen: React.FC = () => {
  const user = useContext(UserContext);

  return (
    <View>
      <View>
        <NumberInput
          label="Poids"
          unit="Kg"
          value={_numberToText(user.weightKg)}
          onChangeText={(text: string) => user.setWeightKg(_textToNumber(text))}
        />
        <NumberInput
          label="Taux de graisse"
          unit="%"
          value={_numberToText(user.fatPercentage)}
          onChangeText={(text: string) => user.setFatPercentage(_textToNumber(text))}
        />
        <NumberInput
          label="Multiplicateur d'activité"
          value={_numberToText(user.activityMultiplier)}
          onChangeText={(text: string) => user.setActivityMultiplier(_textToNumber(text))}
        />
        <NumberInput
          label="Objectif prise de masse"
          unit="%"
          value={_numberToText(user.weightGainPercentage)}
          onChangeText={(text: string) => user.setWeightGainPercentage(_textToNumber(text))}
        />
        <NumberInput
          label="Objectif sèche"
          unit="%"
          value={_numberToText(user.weightLossPercentage)}
          onChangeText={(text: string) => user.setWeightLossPercentage(_textToNumber(text))}
        />
        <NumberInput
          label="Coefficient Protéines"
          value={_numberToText(user.protMultiplier)}
          onChangeText={(text: string) => user.setProtMultiplier(_textToNumber(text))}
        />
        <NumberInput
          label="Coefficient Lipides"
          value={_numberToText(user.lipMultiplier)}
          onChangeText={(text: string) => user.setLipMultiplier(_textToNumber(text))}
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
