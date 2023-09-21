import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../../config";

const styles = StyleSheet.create({

    container: {
        flex:1,
        // justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.White,
    },

    headerText: {
        textAlign:"center",
        fontWeight:"900",
        color:Colors.Black,
        marginTop:"10%",
        fontSize:20,
    },

    resultIconImage: {
        width:"40%",
        height:"30%",
        borderRadius:60,
        marginTop:"5%",
    },

    quizReportView: {
        backgroundColor:Colors.LemonYellow,
        borderRadius:15,
        marginTop:"10%",
        borderColor:Colors.Black,
        borderWidth:0.5,
        padding:30,
        paddingLeft:40,
        paddingLeft:40,
        opacity:0.9,
        shadowColor: Colors.Black,
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 15,
    },

    quizId: {
        fontWeight:"400",
        color:Colors.Black,
        textAlign:"center",
        margin:"1%",
    },

    quizIdSpan: {
        fontWeight:"900",
    },

    quizName: {
        fontWeight:"400",
        color:Colors.Black,
        textAlign:"center",
        margin:"1%",
    },

    quizNameSpan: {
        fontWeight:"900",
    },

    endingTime: {
        fontWeight:"400",
        color:Colors.Black,
        textAlign:"center",
        margin:"1%",
    },

    endingTimeSpan: {
        fontWeight:"900",
    },

    quizScore: {
        fontWeight:"400",
        color:Colors.QuizScoreText,
        textAlign:"center",
        margin:"1%",
    },

    quizScoreSpan: {
        fontWeight:"900",
    },

    navigateButton: {
        backgroundColor:Colors.Primary,
        padding:15,
        paddingLeft:30,
        paddingRight:30,
        borderRadius:10,
        marginTop:"15%",
    },

    navigateIcon: {
        textAlign:"center",
        color:Colors.Black
    }

});

export { styles }