import React, {useState} from 'react';
import {View} from 'react-native';



import styles from './style';
import Input from '../../../../components/Input';


const CardNumberInput = ({onCardNumberChange}:any) => {
  const [formattedNumber, setFormattedNumber] = useState<any>('');
  const maxLength = 19; // 16 digits + 3 hyphens

  const handleNumberChange = (input: any) => {
    // Remove non-numeric characters
    const numericInput = input.replace(/[^0-9]/g, '');

    // Format the input with hyphens
    const formatted = numericInput.replace(/(\d{4})(?=\d)/g, '$1-');

    setFormattedNumber(formatted);
    onCardNumberChange(numericInput)
  };

  return (
    <View style={styles.cardNumberContainer}>
      <Input
        label='Kart Numarası'
        style={styles.cardNumberInput}
        placeholder="Kart Numaranızı Giriniz"
        keyboardType="number-pad"
        value={formattedNumber}
        maxLength={maxLength}
        onChangeText={handleNumberChange}
      />
    </View>
  );
};

export default CardNumberInput;