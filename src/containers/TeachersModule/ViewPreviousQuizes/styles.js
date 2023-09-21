import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../../config";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:Colors.White,
    },

    searchTextInputView: {
        flexDirection:"row",
    },

    searchIcon: {
        marginRight:"2%",
        marginTop:"2%",
        marginLeft:"2%",
        color:Colors.Black
    },

    searchTextInput: {
        borderColor:Colors.Black,
        borderWidth:0.5,
        width:"85%",
        marginLeft:"2%",
        textAlign:"auto",
        color:Colors.Black,
        borderRadius:15,
    },

    noHistoryText: {
        fontSize:20,
        textAlign:"center",
        fontWeight:"200",
        color:Colors.Black,
        marginTop:"85%",
    },

    view: {
        marginTop:"2%",
    },

    quizInfoView: {
        borderColor:Colors.Black,
        borderWidth:1,
        borderRadius:12,
        marginLeft:"2%",
        marginRight:"2%",
        marginTop:"5%",
        padding:10,
    },

    quizId: {
        textAlign:"center",
        fontWeight:"500",
        color:Colors.Black,
        backgroundColor:Colors.Skygreen,
        marginLeft:"4%",
        marginRight:"4%",
        marginTop:"1%",
        borderRadius:15
    },

    quizIdSpan: {
        fontWeight:"900"
    },

    quizName: {
        fontWeight:"500",
        color:Colors.Black,
        textAlign:"center",
        marginTop:"1%",
        borderRadius:5
    },

    quizNameSpan: {
        fontWeight:"900",
    },

    questionsHeader: {
        fontWeight:"500",
        color:Colors.Black,
        marginTop:"1%",
    },

    question: {
        fontSize:12,
        color:Colors.Black,
        fontWeight:"900",
    },

    quizEndingTime: {
        fontWeight:"500",
        color:Colors.Black,
        backgroundColor:"#f5b13b",
        textAlign:"center",
        marginTop:"1%",
        borderRadius:5
    },

    quizEndingTimeSpan: {
        fontWeight:"900",
    }
    
});

export {styles}