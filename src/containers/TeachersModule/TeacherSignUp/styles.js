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
    teacherImage: {
        width:"40%",
        height:"20%",
        borderRadius:50,
    },
    iconText: {
        color:Colors.TeachersLoginButtons,
        marginTop:"2%",
        fontWeight:"900",
    },
    inputUsernameStyle: {
        backgroundColor:Colors.White,
        borderRadius:20,
        borderColor:Colors.TeachersLoginButtons,
        borderWidth:1,
       paddingLeft:105,
       paddingRight:105,
       textAlign:"center",
    },
    inputUsernameLabel: {
        color:Colors.TeachersLoginButtons,
        fontWeight:"900",
        marginLeft:10,
        marginBottom:5,
        marginTop:"2%",
    },
    inputEmailStyle:{
        backgroundColor:Colors.White,
        borderRadius:20,
        borderColor:Colors.TeachersLoginButtons,
        borderWidth:1,
        paddingLeft:80,
        paddingRight:80,
        textAlign:"center",
    },
    inputEmailLabel:{
        color:Colors.TeachersLoginButtons,
        fontWeight:"900",
        marginLeft:10,
        marginTop:"3%",
        marginBottom:5,
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
    SignUpButton: {
        borderRadius:15,
        backgroundColor:Colors.TeachersLoginButtons,
        padding:10,
        paddingLeft:125,
        paddingRight:125,
        marginTop:"5%",
        borderColor:Colors.White,
        borderWidth:1,
    },
    redText: {
        color:Colors.Danger,
        fontWeight:"700",
    },
    SignUpButtonText: {
        color:Colors.White,
        fontWeight:"900",
        fontSize:20,
    }
});

export {styles}