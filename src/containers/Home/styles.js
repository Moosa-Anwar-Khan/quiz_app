import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrix } from "../../config";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:"center",
        alignItems: "center",
        backgroundColor: Colors.White,
    },

    headerText: {
        fontSize: 40,
        fontWeight: "900",
        color: Colors.Black,
        marginTop: "10%",
    },

    quizAppIcon: {
        width: "45%",
        height: "25%",
        marginTop: "10%",
        borderRadius: 60,
        borderColor: Colors.Black,
        borderWidth: 0.1,
        borderColor: Colors.Black
    },

    studentButton: {
        backgroundColor: "#905df5",
        padding: 35,
        paddingLeft: 60,
        paddingRight: 60,
        marginTop: "15%",
        borderRadius:15,
        shadowColor: Colors.Black,
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 15,
    },

    studentButtonText: {
        textAlign: "center",
        color: Colors.White,
        fontWeight: "900",
    },

    studentIcon: {
        textAlign: "center",
        marginTop:"2%",
        color:Colors.White
    },

    teacherButton: {
        backgroundColor: "#f255a1",
        padding: 35,
        paddingLeft: 60,
        paddingRight: 60,
        marginTop: "5%",
        borderRadius:15,
        shadowColor: Colors.Black,
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 15,
    },

    teacherButtonText: {
        textAlign: "center",
        color: Colors.Black,
        fontWeight: "900",
    },

    teacherIcon: {
        textAlign: "center",
        marginTop:"2%",
        color:Colors.Black
    },

})

export default styles