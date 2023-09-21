import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../../config";

const styles = StyleSheet.create({
    myView: {
        // backgroundColor:"#203169",
        backgroundColor:Colors.White,
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    teacherImage: {
       width:"40%",
       height:"20%",
       borderRadius:50,
    },
    backButton: {
        backgroundColor:Colors.TeachersLoginButtons,
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
    iconText: {
        color:Colors.TeachersLoginButtons,
        marginTop:"2%",
        fontWeight:"900",
    },
    inputEmailStyle: {
        backgroundColor:Colors.White,
        borderRadius:20,
        borderColor:Colors.TeachersLoginButtons,
        borderWidth:1,
       paddingLeft:80,
       paddingRight:80,
       textAlign:"center",
    },
    inputEmailLabel: {
        color:Colors.TeachersLoginButtons,
        fontWeight:"900",
        marginLeft:10,
        marginTop:"3%"
    },
    inputPasswordStyle:{
        backgroundColor:Colors.White,
        borderRadius:20,
        borderColor:Colors.TeachersLoginButtons,
        borderWidth:1,
        paddingLeft:95,
        paddingRight:95,
        textAlign:"center",
    },
    inputPasswordLabel:{
        color:Colors.TeachersLoginButtons,
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
        backgroundColor:Colors.TeachersLoginButtons,
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
        backgroundColor:Colors.TeachersLoginButtons,
        padding:10,
        paddingLeft:135,
        paddingRight:135,
        marginTop:5,
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