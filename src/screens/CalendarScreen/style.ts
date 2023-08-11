import {StyleSheet} from 'react-native';
import colors from '../../style/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  day: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    height: 250,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  seat: {
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    paddingVertical:2,
  },
  activeSeat: {
    borderWidth: 1,
    borderColor: colors.aqua,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  }
});

export default styles;