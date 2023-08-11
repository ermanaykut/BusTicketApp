import { StyleSheet } from "react-native";
import colors from "../../../../style/colors";

const styles = StyleSheet.create({

    modalContainer: {
        width: 300,
        height: 240,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 20,
        alignSelf: 'center',
        alignItems: 'center',
      },
      row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
      },
      seat: {
        width: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 10,
        paddingVertical:2,
      },
      seatType:{
        backgroundColor: colors.lightBlue + 70,
        borderRadius:7,
        paddingVertical:2,
      },
      button:{
        marginTop:10,
        shadowOpacity:0.6,
      }




})

export default styles;