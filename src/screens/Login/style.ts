import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../style/colors';


const {width} = Dimensions.get('screen')

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.intro,
    padding:30,
  },
  input: {
    backgroundColor: colors.intro,
    height: 60,
    marginVertical: 10,

  },
  inputContainer: {
    marginTop: 70,
    paddingHorizontal:25,
  },
  logo:{
    width:200,
    height:200,
    position:'absolute',
    right:width * .25,
    top:-10,
    
  },
  mainContainer:{
    marginTop:150,
  },
  text:{
    fontSize:18,
    fontWeight:'700',
    paddingHorizontal:20,
    fontVariant:['small-caps'],
    color: colors.black + 80,
  },
  forgotText: {
    color: colors.grey,
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginVertical: 20,
  },
  or: {
    color: colors.grey,
    marginVertical: 40,
    alignSelf: 'center',
  },
  buttons:{
    width:'80%'
  },
});

export default styles;