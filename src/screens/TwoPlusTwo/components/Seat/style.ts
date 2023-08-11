import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../../style/colors';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: width * 0.13,
    height: width * 0.14,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    paddingVertical:2,
    marginHorizontal: width * 0.01,
    marginVertical: width * 0.02,

    alignItems: 'center',
  },
  hallwayContainer: {
    marginLeft: width * 0.3,
    
  },
  nullContainer: {
    borderWidth: 0,
  },
  seatNumberContainer:{
    width:'100%',
    borderRightWidth:1,
    borderLeftWidth:1,
    borderTopWidth:1,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:0,
  },
  seatNumber:{
    color: colors.darkgrey,
    fontWeight: '700',
    fontSize: 13,

  }
});

export default styles;