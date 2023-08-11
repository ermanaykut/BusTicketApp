import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../style/colors';

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.intro,


  },
  mainContainer:{
    marginTop:130
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
    color: colors.darkgrey,
    paddingHorizontal:25,
  },
  exploreText: {
    color: colors.darkgrey,
    marginVertical: 20,
    fontSize: 16,
    paddingHorizontal:25,
  },
  input: {
    backgroundColor: colors.intro,
    height: 60,
    marginVertical: 10,
  },
  inputContainer: {
    marginTop: 50,
    paddingHorizontal:25,
  },
  buttons:{
    width:'80%'
  },
  logo:{
    width:200,
    height:200,
    position:'absolute',
    right:width * .25,
    top:-10,
    

  },

});

export default styles;