import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from '../styles/NumberInput.style';

const NumberInput = props => {
  const [isValid, setIsValid] = useState(true);

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
