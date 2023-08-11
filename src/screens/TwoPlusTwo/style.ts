import {StyleSheet} from 'react-native';
import colors from '../../style/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    marginHorizontal: 20,
    
  },

  totalPriceContanier: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    marginBottom:3,
  },
  paymentTextContainder: {
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:5,
    backgroundColor: colors.myGreen,
    width:'55%',
    borderRadius:10,
  },
  paymentText:{
    color:colors.white,
    fontWeight:'600'
  },

  iconContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop:5,
  },
  modalContainer: {
    width: 200,
    height: 200,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  gender: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default styles;