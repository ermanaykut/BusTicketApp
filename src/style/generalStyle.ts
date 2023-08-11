import {StyleSheet} from 'react-native';
import colors from './colors';
import {PAGE_PADDING} from './styleProps';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: PAGE_PADDING,
  },
});

export default globalStyles;