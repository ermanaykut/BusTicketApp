import {StyleSheet} from 'react-native';
import colors from '../../style/colors';


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 10,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowOpacity: 1,
    shadowColor: colors.black,
    shadowRadius: 5,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.9,
    borderColor: colors.blue,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  iconContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.darkred,
    marginBottom: 30,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    fontVariant: ['small-caps'],
    fontWeight: '600',
  },
  hour: {
    fontSize: 14,
    fontWeight: '700',
  },
  nameText: {
    fontSize: 14,
    textDecorationLine: 'underline',
    textDecorationColor: colors.darkgrey,
  },
  textContainer:{
   marginBottom: 20,
   marginLeft: 10
  }
});

export default styles;