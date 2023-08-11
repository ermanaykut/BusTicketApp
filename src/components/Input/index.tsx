import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

import {IInput} from './interface';

import styles from './style';

const Input = ({
  keyboardType,
  autoCorrect,
  autoCapitalize,
  label,
  maxLength,
  placeholder,
  value,
  onChangeText,
  style,
  ...props
}: IInput) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          style,
          isFocused ? styles.focusedContainer : styles.inputContainer,
        ]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          maxLength={maxLength}
          autoCorrect={autoCorrect}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          placeholder={placeholder}
          style={styles.inputText}
          {...props}
        />
      </View>
    </View>
  );
};

export default React.memo(Input);