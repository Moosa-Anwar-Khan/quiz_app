import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../../config";

const styles = StyleSheet.create({
    myView: {
        backgroundColor:Colors.White,
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    backButton: {
        backgroundColor:Colors.ModalTextColor,
        borderRadius:10,
        padding:5,
        paddingLeft:10,
        paddingRight:10,
        marginTop:0,
        marginLeft:-320,
    },
    backIcon: {
        textAlign:"center",
        color:Colors.White
    },

    quizHomeIcon: {
        width:"40%",
        height:"20%",
        borderRadius:60,
    },
    iconText: {
        color:Colors.ModalTextColor,
        marginTop:"1%",
        marginBottom:"10%",
        fontWeight:"900",
    },
    inputEmailStyle: {
        backgroundColor:Colors.White,
        borderRadius:20,
       paddingLeft:80,
       paddingRight:80,
       borderColor:Colors.ModalTextColor,
       borderWidth:1,
       color:Colors.Black,
    },
    inputEmailLabel: {
        color:Colors.ModalTextColor,
        fontWeight:"900",
        marginLeft:10,
        marginBottom:5,
    },
    inputPasswordStyle:{
        backgroundColor:Colors.White,
        borderRadius:20,
        paddingLeft:95,
        paddingRight:95,
        borderColor:Colors.ModalTextColor,
        borderWidth:1,
        color:Colors.Black,
    },
    inputPasswordLabel:{
        color:Colors.ModalTextColor,
        fontWeight:"900",
        marginLeft:10,
        marginTop:"3%",
        marginBottom:5,
    },
    redText: {
        color:Colors.Danger,
        fontWeight:"700",
    },
    loginButton: {
        borderRadius:15,
        backgroundColor:Colors.StudentsLoginButtons,
        padding:10,
        paddingLeft:140,
        paddingRight:140,
        marginTop:"5%",
        borderColor:Colors.White,
        borderWidth:1,
    },
    loginButtonText: {
        color:Colors.White,
        fontWeight:"900",
        fontSize:15,
    },
    SignUpButton: {
        borderRadius:15,
        backgroundColor:Colors.StudentsLoginButtons,
        padding:10,
        paddingLeft:135,
        paddingRight:135,
        marginTop:10,
        borderColor:Colors.White,
        borderWidth:1,
    },
    SignUpButtonText: {
        color:Colors.White,
        fontWeight:"900",
        fontSize:15,
    },
    googleButtonView: {
        margin:"2%",
    }
});

export {styles}