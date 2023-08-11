import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../style/colors';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue + 90,
  },
  image: {
    width: 180,
    height: 180,
    position: 'absolute',
    top: 0,
    right: -30,
    zIndex: 1,
  },
  buttonContainer:{
    backgroundColor: colors.orange,
    position: 'absolute',
    bottom: 200,
    right: 150,
    shadowOpacity: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  text:{
    color: colors.white,
    fontSize: 17,
    fontWeight: '800',
    
  }
});

export default styles;