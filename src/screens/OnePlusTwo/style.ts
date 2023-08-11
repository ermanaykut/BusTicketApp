import {StyleSheet} from 'react-native';
import colors from '../../style/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    marginHorizontal: 30,
    
  },
  totalPriceContanier: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  iconContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  verticalTextContainer: {
    position: 'absolute',
    bottom: '50%',
    right: '35%',
  },
  verticalText: {
    fontSize: 20,
    color: colors.darkgrey,
    transform: [{rotate: '-90deg'}],
    writingMode: 'vertical-rl',
    opacity: .5
  },
  textIcon:{
    position: 'absolute',
    bottom: 140,
    right: '40%',
  },
  textIcon2:{
    position: 'absolute',
    bottom: -170,
    right: '40%',
  }

});

export default styles;