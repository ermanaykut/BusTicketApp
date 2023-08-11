import {StyleSheet} from 'react-native';
import colors from '../../../../style/colors';


const styles = StyleSheet.create({
  validDateContainer: {
    width : '70%'
  },
  validDateInput: {
    height: 55,
    width: 90,
    backgroundColor: colors.lightgrey,
    flexDirection: 'row',
    marginHorizontal: 5,
    borderWidth: 0.5,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: colors.grey,
  },
});

export default styles;