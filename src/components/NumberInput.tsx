import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from '../styles/NumberInput.style';

type Props = {
  value: string;
  label: string;
  unit: string;
}

const NumberInput: React.FC<Props> = props => {
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    /^\d+[.,]?\d*$/.test(props.value) ? setIsValid(true) : setIsValid(false);
  }, [props.value]);

  return (
    <View style={styles.containerStyle}>
      <Text>{props.label}</Text>
      <View style={styles.innerContainerStyle}>
        <TextInput
          style={[styles.textInputStyle, !isValid && styles.textInvalid]}
          keyboardType="numeric"
          {...props}
        />
        <Text>{props.unit}</Text>
      </View>
    </View>
  );
};

export default NumberInput;
