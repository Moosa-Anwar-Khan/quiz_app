import { StyleSheet } from "react-native";
import { Colors } from "../../../config";

const styles = StyleSheet.create({

    container: {
        marginTop: "5%",
    },

    nameOfQuizText: {
        marginTop: "2%",
        color: Colors.Black,
        fontSize: 17,
        fontWeight: "500",
        textAlign: "center",
    },

    selectDateButton: {
        backgroundColor: Colors.SelectDateButton,
        padding: 5,
        marginLeft: "25%",
        marginRight: "25%",
        marginTop:"5%",
        borderRadius: 15,
        shadowColor: Colors.Black,
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 15,
    },

    selectDateButtonText: {
        textAlign: "center",
        color: Colors.White,
        fontWeight: "500",
    },

    dateText: {
        backgroundColor: Colors.White,
        textAlign: "center",
        padding: 10,
        marginTop: "1%",
        borderRadius: 10,
        marginLeft: "4%",
        marginRight: "4%",
        color: Colors.SelectDateButton,
        fontWeight: "900",
        borderColor: Colors.SelectDateButton,
        borderWidth: 1,
    },

    selectTimeButton: {
        backgroundColor: Colors.Skygreen,
        padding: 5,
        marginTop: "5%",
        marginLeft: "25%",
        marginRight: "25%",
        borderRadius: 15,
        shadowColor: Colors.Black,
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 15,
    },

    selectTimeButtonText: {
        textAlign: "center",
        color: Colors.White,
        fontWeight: "500",
    },

    timeText: {
        backgroundColor:Colors.White,
        textAlign: "center",
        padding: 10,
        marginTop: "1%",
        borderRadius: 10,
        marginLeft: "4%",
        marginRight: "4%",
        color: Colors.Skygreen,
        fontWeight: "900",
        borderColor: Colors.Skygreen,
        borderWidth: 1,
    },

    addedQuestionsView: {
        backgroundColor: Colors.White,
        borderRadius: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: "2%",
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.Skygreen,
        shadowColor: Colors.Black,
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 15,
    },

    questionHeader: {
        backgroundColor: Colors.Skygreen,
        textAlign: "center",
        borderRadius: 15,
        fontWeight: "900",
        color: Colors.Black,
    },

    questionStatement: {
        color: Colors.Black,
        fontWeight: "500",
        fontSize: 10,
        marginTop: "3%",
    },
    questionStatementSpan: {
        color: Colors.Black,
        fontWeight: "900"
    },

    optionsHeader: {
        color: Colors.Black,
        fontWeight: "500",
        fontSize: 12,
    },

    option: {
        color: Colors.Black,
        fontWeight: "500",
        fontSize: 10,
    },

    optionSpan: {
        color: Colors.Black,
        fontWeight: "900",
        fontSize: 10,
    },

    correctOption: {
        color: Colors.Black,
        fontWeight: "500",
        fontSize: 10,
    },

    correctOptionSpan: {
        color: Colors.Black,
        fontWeight: "900",
        fontSize: 10,
    },

    deleteIcon: {
        color:Colors.Danger,
        textAlign:"center",
        marginTop:"1%",
    },

    submitButton: {
        backgroundColor: Colors.SubmitButtonColor,
        padding: 10,
        flexDirection: "row",
        marginTop: "5%",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "10%",
        marginRight: "10%",
        borderRadius: 15,
        borderColor: Colors.Black,
        borderWidth: 0.5,
        shadowColor: Colors.Black,
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 15,
    },

    submitButtonText: {
        fontWeight: "900",
        color: Colors.Black,
        marginLeft: "25%",
    },

    sendIcon: {
        marginLeft: "20%",
        color:Colors.Black
    }

})

export default styles