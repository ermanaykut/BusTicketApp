import {StyleSheet} from 'react-native';
import colors from '../../style/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginVertical: 5,
    marginHorizontal: 5,
    color: colors.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: colors.lightgrey,
    flexDirection: 'row',
    marginHorizontal: 5,
    borderWidth: 0.5,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: colors.grey,
  },
  focusedContainer: {
    borderWidth: 2,
    borderColor: colors.darkgrey,
  },
  inputText: {
    fontSize: 15,
    color: colors.darkgrey,
    marginLeft: 10,
    flex: 1,
  },
});

export default styles;