import React, {useState} from 'react';
import {View} from 'react-native';



import styles from './style';
import Input from '../../../../components/Input';

const ValidDateInput = ({onDateChange}:any) => {
  const [formattedNumber, setFormattedNumber] = useState<any>('');
  const maxLength = 5; // 4 digits + 1 slash

  const handleNumberChange = (input: any) => {
    // Remove non-numeric characters
    const numericInput = input.replace(/[^0-9]/g, '');

    // Format the input with slash
    const formatted = numericInput.replace(/(\d{2})(?=\d)/g, '$1/');

    setFormattedNumber(formatted);
    onDateChange(numericInput);
  };

  return (
    <View style={styles.validDateContainer}>
      <Input
        label='Geçerlilik Tarihi:'
        style={styles.validDateInput}
        placeholder="AA/YY"
        keyboardType="number-pad"
        value={formattedNumber}
        maxLength={maxLength}
        onChangeText={handleNumberChange}
      />
    </View>
  );
};

export default ValidDateInput;