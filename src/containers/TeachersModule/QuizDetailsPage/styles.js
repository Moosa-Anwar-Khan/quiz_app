import { StyleSheet } from "react-native";
import { Colors } from "../../../config";

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.White,
        // justifyContent: "center",
        // alignItems: "center",
        flex: 1,
    },

    container2: {
        marginTop:"15%",
    },

    quizTimerImage: {
        height:"35%",
        width:"50%",
        marginLeft:"25%",
        marginBottom:"20%",
    },

    quizDetailsLayout: {
        backgroundColor: Colors.White,
        borderRadius: 20,
        borderWidth:1,
        borderColor: Colors.Primary,
        padding: 20,
        marginLeft:"2%",
        marginRight:"2%",
        shadowColor: Colors.Black,
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 15,
        marginTop:-80,
    },

    quizId: {
        textAlign: "center",
        fontWeight: "500",
        color: Colors.Black,
        fontSize: 15,
        margin: 10,
    },

    quizIdSpan: {
        fontWeight: "900",
    },

    quizName: {
        textAlign: "center",
        fontWeight: "500",
        color: Colors.Black,
        fontSize: 15,
        margin: 10
    },

    quizNameSpan: {
        fontWeight: "900",
    },

    quizCreatedBy: {
        textAlign: "center",
        fontWeight: "500",
        color: Colors.Black,
        fontSize: 15,
        margin: 10
    },

    quizCreatedBySpan: {
        fontWeight: "900",
    },

    quizCreatedOn: {
        textAlign: "center",
        fontWeight: "500",
        color: Colors.Black,
        fontSize: 15,
        margin: 10,
    },

    quizCreatedOnSpan: {
        fontWeight: "900",
    },

    endTime: {
        textAlign: "center",
        fontWeight: "500",
        color: Colors.Black,
        fontSize: 15,
        margin: 10,
    },

    endTimeSpan: {
        fontWeight: "900",
    },

    checkmarkButton: {
        backgroundColor:Colors.Primary,
        marginLeft:"20%",
        marginRight:"20%",
        marginTop:"10%",
        padding:10,
        borderRadius:15,
        shadowColor: Colors.Black,
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 15,
    },

    checkmarkIcon: {
        textAlign:"center",
        color:Colors.White
    }

})

export default styles