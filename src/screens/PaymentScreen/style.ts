import {StyleSheet} from 'react-native';
import colors from '../../style/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  seatTextContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: colors.white,
    shadowOpacity: 1,
    shadowRadius: 7,
    width: '80%',
    alignSelf: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  eachSeat: {
    width: '75%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  seatText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.darkgrey,
  },
  seatPriceText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.darkgrey,
  },
  totalPriceContainer:{
    width: '75%',
    borderTopWidth: 1,
    marginTop: 5,
    paddingVertical: 5,
  },
  totalPriceText:{
    fontSize: 16,
    fontWeight: '700',
    color: colors.darkgrey,
    alignSelf: 'flex-end',
  },
  textContainer:{
    marginBottom:20,
    alignItems: 'center',
    width: '75%',
    alignSelf: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  midText:{
    fontSize:18,
    color:colors.black + 80
  },
  creditCardForm: {
    alignItems: 'center',
    backgroundColor: colors.white,
    shadowOpacity: 1,
    shadowRadius: 7,
    width: '80%',
    alignSelf: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom:50,
  },
  nameInput: {
    height: 55,
    width: '70%',
    backgroundColor: colors.lightgrey,
    flexDirection: 'row',
    marginHorizontal: 5,
    borderWidth: 0.5,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: colors.grey,
  },
  cardNumberInput: {
    height: 55,
    width: '70%',
    backgroundColor: colors.lightgrey,
    flexDirection: 'row',
    marginHorizontal: 5,
    borderWidth: 0.5,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: colors.grey,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
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
        
  cvvInput: {
    height: 55,
    width: 60,
    backgroundColor: colors.lightgrey,
    flexDirection: 'row',
    marginHorizontal: 5,
    borderWidth: 0.5,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: colors.grey,
    },

  buttonContainer:{
    width:'30%',
    backgroundColor: colors.myGreen,
    shadowOpacity: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
    },
});

export default styles;