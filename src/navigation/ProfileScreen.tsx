import React, {useContext, useState, useEffect} from 'react';
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

  // We need to store inputs in Profile state since we need strings rather
  // than integers stored in Usercontext (to display '1.' for example which
  // happens when a user inputs '1.9')
  const [weightInput, setWeightInput] = useState(_numberToText(user.weightKg));
  const [fatPercentageInput, setFatPercentageInput] = useState(_numberToText(user.fatPercentage));
  const [activityMultiplierInput, setActivityMultiplierInput] = useState(
    _numberToText(user.activityMultiplier),
  );
  const [weightGainPercentageInput, setWeightGainPercentageInput] = useState(
    _numberToText(user.weightGainPercentage),
  );
  const [weightLossPercentageInput, setWeightLossPercentageInput] = useState(
    _numberToText(user.weightLossPercentage),
  );
  const [protMultiplierInput, setProtMultiplierInput] = useState(
    _numberToText(user.protMultiplier),
  );
  const [lipMultiplierInput, setLipMultiplierInput] = useState(_numberToText(user.lipMultiplier));

  useEffect(() => {
    user.setWeightKg(_textToNumber(weightInput));
  }, [user, weightInput]);

  useEffect(() => {
    user.setFatPercentage(_textToNumber(fatPercentageInput));
  }, [user, fatPercentageInput]);

  useEffect(() => {
    user.setActivityMultiplier(_textToNumber(activityMultiplierInput));
  }, [user, activityMultiplierInput]);

  useEffect(() => {
    user.setWeightGainPercentage(_textToNumber(weightGainPercentageInput));
  }, [user, weightGainPercentageInput]);

  useEffect(() => {
    user.setWeightLossPercentage(_textToNumber(weightLossPercentageInput));
  }, [user, weightLossPercentageInput]);

  useEffect(() => {
    user.setProtMultiplier(_textToNumber(protMultiplierInput));
  }, [user, protMultiplierInput]);

  useEffect(() => {
    console.log('setting lipMultiplier to ' + _textToNumber(lipMultiplierInput));
    user.setLipMultiplier(_textToNumber(lipMultiplierInput));
  }, [user, lipMultiplierInput]);

  console.log('rerendering ProfileScreen');
  console.log('user lipMultiplier: ' + user.lipMultiplier);

  return (
    <View>
      <View>
        <NumberInput
          label="Poids"
          unit="Kg"
          value={weightInput}
          onChangeText={(text: string) => setWeightInput(text)}
        />
        <NumberInput
          label="Taux de graisse"
          unit="%"
          value={fatPercentageInput}
          onChangeText={(text: string) => setFatPercentageInput(text)}
        />
        <NumberInput
          label="Multiplicateur d'activité"
          value={activityMultiplierInput}
          onChangeText={(text: string) => setActivityMultiplierInput(text)}
        />
        <NumberInput
          label="Objectif prise de masse"
          unit="%"
          value={weightGainPercentageInput}
          onChangeText={(text: string) => setWeightGainPercentageInput(text)}
        />
        <NumberInput
          label="Objectif sèche"
          unit="%"
          value={weightLossPercentageInput}
          onChangeText={(text: string) => setWeightLossPercentageInput(text)}
        />
        <NumberInput
          label="Coefficient Protéines"
          value={protMultiplierInput}
          onChangeText={(text: string) => setProtMultiplierInput(text)}
        />
        <NumberInput
          label="Coefficient Lipides"
          value={lipMultiplierInput}
          onChangeText={(text: string) => setLipMultiplierInput(text)}
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
