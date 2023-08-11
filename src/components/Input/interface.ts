import {KeyboardTypeOptions, StyleProp, TextInputProps, TextStyle} from 'react-native';

export interface IInput {
  label?: string;
  placeholder?: string;
  maxLength?: number;
  style?: StyleProp<TextStyle> | undefined;
  autoCorrect?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined
  props?: TextInputProps;
  value?: string | undefined;
  onChangeText?: ((text: string)=> void) | undefined
}