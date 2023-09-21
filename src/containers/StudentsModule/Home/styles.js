import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../../config";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.HomeBackground,
        // justifyContent: "center",
        // alignItems: "center",
        flex: 1,
    },

    myModal: {
        backgroundColor: Colors.ModalBackgroundColor,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.8,
        borderColor: Colors.White,
        borderRadius: 40,
        marginTop: 10,
        shadowColor: Colors.Black,
        padding: 100,
        shadowOnset: {
          width: 15,
          height: 15,
        },
        shadowOpacity: 1,
        shadowRadius: 1.00,
    
        elevation: 15,
      },
    
      modalUserIcon: {
        textAlign: "center",
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
        borderColor: Colors.White,
        marginTop: 20,
        backgroundColor: Colors.ModalTextColor,
        padding: 15,
        paddingLeft: 40,
        paddingRight: 40,
        marginLeft: -20,
        marginRight: -20,
        borderRadius: 30,
      },
    
      logOutButtonText: {
        textAlign: "center",
        color: Colors.White,
        fontWeight: "900",
      },
    
      settingsButton: {
        borderWidth: 2,
        borderColor: Colors.White,
        marginTop: 10,
        backgroundColor: Colors.ModalTextColor,
        padding: 15,
        paddingLeft: 40,
        paddingRight: 40,
        marginLeft: -20,
        marginRight: -20,
        borderRadius: 30,
      },
    
      settingsButtonText: {
        textAlign: "center",
        color: Colors.White,
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
        backgroundColor: Colors.White,
        borderColor: Colors.White,
        borderRadius: 50,
        shadowColor: Colors.Black,
        shadowOnset: {
          width: 25,
          height: 25,
        },
        shadowOpacity: 1,
        shadowRadius: 1.00,
    
        elevation: 24,
      },

      optionsBar: {
        flexDirection:"row",
        marginTop:"5%",
      },

      menuIcon: {
        color:Colors.White
      },

      userIcon: {
        marginLeft:"32%",
        color:Colors.White
      },

      homeIcon: {
        marginLeft:"32%",
        color:Colors.HomeIconClicked
      },

      studentHomeImage: {
        width:"40%",
        height:"22%",
        marginLeft:"30%",
        marginTop:"10%",
      },

    searchQuizButton: {
        width: "80%",
        height:"20%",
        borderWidth: 2,
        borderRadius: 20,
        borderColor: Colors.Black,
        marginTop:"10%",
        marginLeft:"10%",
        marginBottom:"10%",
        backgroundColor:Colors.HomeButtonsBackgroundColor,
        shadowColor: Colors.Black,
      shadowOpacity: 0.5,
      shadowRadius: 0.5,
      elevation: 5,
    },

    searchQuizButtonText:{
        color:Colors.Black,
        fontWeight:"900",
        textAlign:"center",
        marginTop:"7%",
        fontSize:20,
    },

    searchQuizIcon:{
        textAlign:"center",
        color:Colors.Black
    },

    viewHistoryButton:{
        width: "80%",
        height:"20%",
        borderWidth: 2,
        borderRadius: 20,
        borderColor: Colors.Black,
        backgroundColor:Colors.HomeButtonsBackgroundColor,
        marginTop:"3%",
        marginLeft:"10%",
        shadowColor: Colors.Black,
      shadowOpacity: 0.5,
      shadowRadius: 0.5,
      elevation: 5,
    },

    viewHistoryButtonText:{
        color:Colors.Black,
        fontWeight:"900",
        textAlign:"center",
        marginTop:"10%",
        fontSize:20,
    },

    viewHistoryIcon:{
        textAlign:"center",
        color:Colors.Black
    }
});

export { styles }