import {StyleSheet} from 'react-native';
import colors from '../../style/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    width: '100%',
    height: 42,
    borderRadius: 8,
    padding: 5,
    paddingLeft: 10,
    justifyContent: 'center',
    marginVertical: 5,
  },
  placeholder: {
    color: colors.grey,
  },
  modal: {
    width: '90%',
    height: 400,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    alignSelf: 'center',
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    padding: 10,
  },
  item: {
    color: colors.grey,
    fontSize: 16,
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    color: colors.lightBlue,
  },
});

export default styles;