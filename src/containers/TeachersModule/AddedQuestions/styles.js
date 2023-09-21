import { StyleSheet } from "react-native";
import { Colors } from "../../../config";

const styles = StyleSheet.create({

   nameOfQuizText: {
      marginTop:"5%",
      color:Colors.Black,
      fontSize:17,
      fontWeight:"500",
      textAlign:"center",
   },

    addedQuestionsView: {
      backgroundColor: Colors.White,
      borderRadius:15,
      marginLeft:10,
      marginRight:10,
      marginTop:"6%",
      padding:10,
      borderWidth:1,
      borderColor:Colors.Skygreen,
      shadowColor: Colors.Black,
      shadowOpacity: 0.5,
      shadowRadius: 0.5,
      elevation: 15,
   },

   questionHeader: {
    backgroundColor:Colors.Skygreen,
    textAlign:"center",
    borderRadius:15,
    fontWeight:"900",
    color:Colors.Black
   },

   questionStatement: {
    color:Colors.Black,
    fontWeight:"500",
    fontSize:12,
    marginTop:"3%"
   },
   questionStatementSpan: {
    color:Colors.Black,
    fontWeight:"900"
   },

   optionsHeader: {
    color:Colors.Black,
    fontWeight:"500",
    fontSize:14,
   },

   option:{
    color:Colors.Black,
    fontWeight:"500",
    fontSize:12,
   },

   optionSpan: {
    color:Colors.Black,
    fontWeight:"900"
   },

   correctOption: {
    color:Colors.Black,
    fontWeight:"500",
    fontSize:12,
   },

   correctOptionSpan: {
    color:Colors.Black,
    fontWeight:"900"
   }

})

export default styles