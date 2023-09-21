import { StyleSheet } from "react-native";
import { Colors } from "../../../config";

const styles = StyleSheet.create({
   container: {
      // flex: 1,
      backgroundColor: "#ffffff",
   },

   myModal: {
      backgroundColor: Colors.ModalBackgroundColor,
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.8,
      borderColor: "#0FA958",
      borderRadius: 40,
      marginTop: 10,
      shadowColor: "black",
      padding: 100,
      shadowOnset: {
         width: 15,
         height: 15,
      },
      shadowOpacity: 1,
      shadowRadius: 1.00,

      elevation: 15,
   },

   userIcon: {
      textAlign: "center",
   },

   modalUserIcon: {
      color: Colors.ModalTextColor,
   },

   usernameTxt: {
      color: Colors.ModalTextColor,
      fontWeight: "900",
      fontSize: 15,
      textAlign: "auto",
   },

   emailTxt: {
      color: Colors.ModalTextColor,
      fontWeight: "900",
      fontSize: 15,
      textAlign: "auto",
   },

   logOutButton: {
      borderWidth: 2,
      borderColor: "#FFFFFF",
      marginTop: 20,
      backgroundColor: "#203169",
      padding: 15,
      paddingLeft: 40,
      paddingRight: 40,
      marginLeft: -20,
      marginRight: -20,
      borderRadius: 30,
   },

   logOutButtonText: {
      textAlign: "center",
      color: "#FFFFFF",
      fontWeight: "900",
   },

   settingsButton: {
      borderWidth: 2,
      borderColor: "#FFFFFF",
      marginTop: 10,
      backgroundColor: "#203169",
      padding: 15,
      paddingLeft: 40,
      paddingRight: 40,
      marginLeft: -20,
      marginRight: -20,
      borderRadius: 30,
   },

   settingsButtonText: {
      textAlign: "center",
      color: "#FFFFFF",
      fontWeight: "900",
   },

   backModalButton: {
      marginTop: 60,
      marginBottom: 10,
      borderWidth: 3,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: "#FFFFFF",
      borderColor: "#ffffff",
      borderRadius: 50,
      shadowColor: "#000000",
      shadowOnset: {
         width: 25,
         height: 25,
      },
      shadowOpacity: 1,
      shadowRadius: 1.00,

      elevation: 24,
   },

   backButtonView: {
      marginTop:"1%",
      backgroundColor:"#ffffff",
   },

   backButton: {
      backgroundColor: Colors.Primary,
      borderRadius: 10,
      padding: 5,
      marginLeft:"2%",
      marginRight:"85%",
   },

   backIcon: {
      textAlign: "center",
      color:Colors.Black
   },

   optionsBar: {
      flexDirection: "row",
      marginTop: "3%",
   },

   menuIcon: {
      marginLeft: "2%",
      color:Colors.Black
   },

   userIcon: {
      marginLeft: "30%",
   },

   homeIcon: {
      marginLeft: "80%",
      color:Colors.Black
   },

   quizNameField: {
      borderWidth: 1.5,
      width: "90%",
      borderRadius: 50,
      marginLeft: "5%",
      marginTop: "5%",
      textAlign: "center",
      fontWeight: "500",
      borderColor: Colors.Primary
   },

   headerText: {
      color: Colors.Black,
      marginTop: "7%",
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "center",
   },

   questionsAddedResetView: {
      flexDirection: "row",
      marginTop: "5%",
   },

   questionsAddedButton: {
      backgroundColor: Colors.QuestionsAddedButton,
      borderRadius: 10,
      marginLeft: "3%",
      padding: 5,
      borderWidth: 0.5,
      borderColor: Colors.Primary,
      shadowColor: Colors.Black,
      shadowOpacity: 0.5,
      shadowRadius: 0.5,
      elevation: 5,
   },

   questionsAddedButtonText: {
      fontWeight: "500",
      color: Colors.Primary,
   },

   resetButton: {
      backgroundColor: Colors.Primary,
      marginLeft: "45%",
      padding: 10,
      borderRadius: 10,
      shadowColor: Colors.Black,
      shadowOpacity: 0.5,
      shadowRadius: 0.5,
      elevation: 15,
   },

   resetButtonText: {
      color: Colors.White,
      fontWeight: "900",
   },

   questionLabel: {
      color: Colors.Black,
      fontWeight: "900",
      marginTop: "5%",
      marginLeft: "2%",
      textAlign:"left",
   },

   questionField: {
      borderColor: Colors.Black,
      borderWidth: 1,
      marginLeft: "2%",
      marginRight: "2%",
      marginTop: "1%",
      width: "95%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
   },

   optionsView: {
      marginTop: "5%",
      justifyContent: "center",
      alignItems: "center",
   },

   optionAbutton: {
      backgroundColor: Colors.White,
      borderColor: Colors.Black,
      borderWidth: 0.5,
      borderRadius: 100,
      height: 25,
      width: 30,
      marginLeft: -10,
      marginRight: 10,
      marginTop: "2%"
   },

   optionAbuttonText: {
      textAlign: "center",
      color: Colors.Black
   },

   option1Field: {
      borderColor: Colors.Black,
      borderWidth: 1,
      width: "60%",
      borderRadius: 5,
   },

   optionBbutton: {
      backgroundColor: Colors.White,
      borderColor: Colors.Black,
      borderWidth: 0.5,
      borderRadius: 100,
      height: 25,
      width: 30,
      marginLeft: -10,
      marginRight: 10,
      marginTop: "4%"
   },

   optionBbuttonText: {
      textAlign: "center",
      color: Colors.Black
   },

   option2Field: {
      borderColor: Colors.Black,
      borderWidth: 1,
      width: "60%",
      borderRadius: 5,
      marginTop: "2%",
   },

   optionCbutton: {
      backgroundColor: Colors.White,
      borderColor: Colors.Black,
      borderWidth: 0.5,
      borderRadius: 100,
      height: 25,
      width: 30,
      marginLeft: -10,
      marginRight: 10,
      marginTop: "4%"
   },

   optionCbuttonText: {
      textAlign: "center",
      color: Colors.Black
   },

   option3Field: {
      borderColor: Colors.Black,
      borderWidth: 1,
      width: "60%",
      borderRadius: 5,
      marginTop: "2%",
   },

   optionDbutton: {
      backgroundColor: Colors.White,
      borderColor: Colors.Black,
      borderWidth: 0.5,
      borderRadius: 100,
      height: 25,
      width: 30,
      marginLeft: -10,
      marginRight: 10,
      marginTop: "4%"
   },

   optionDbuttonText: {
      textAlign: "center",
      color: Colors.Black
   },

   option4Field: {
      borderColor: Colors.Black,
      borderWidth: 1,
      width: "60%",
      borderRadius: 5,
      marginTop: "2%",
   },

   selectListView: {
      marginTop: "10%",
      marginLeft: "10%",
      marginRight: "10%"
   },

   addQuestion: {
      backgroundColor: Colors.AddQuestionButtonColor,
      padding: 10,
      paddingTop: 12,
      paddingBottom: 12,
      marginLeft: "30%",
      marginRight: "30%",
      marginTop: "5%",
      borderRadius: 12,
      shadowColor: Colors.Black,
      shadowOpacity: 0.5,
      shadowRadius: 0.5,
      elevation: 5,
   },

   addQuestionText: {
      textAlign: "center",
      color: "black",
      fontWeight: "900",
   },

   finalizeQuizButton: {
      backgroundColor: Colors.SubmitButtonColor,
      padding: 10,
      paddingTop: 12,
      paddingBottom: 12,
      marginLeft: "30%",
      marginRight: "30%",
      marginTop: "10%",
      borderRadius: 12,
      shadowColor: Colors.Black,
      shadowOpacity: 0.5,
      shadowRadius: 0.5,
      elevation: 5,
   },

   finalizeQuizButtonText: {
      textAlign: "center",
      color: Colors.Black,
      fontWeight: "900",
   }

})

export default styles