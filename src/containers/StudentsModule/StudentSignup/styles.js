import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../../config";

const styles = StyleSheet.create({
    myView: {
        backgroundColor: Colors.White,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },

    quizHomeIcon: {
        width: "40%",
        height: "20%",
        borderRadius: 60,
    },
    iconText: {
        color: Colors.ModalTextColor,
        marginTop: "1%",
        marginBottom: "10%",
        fontWeight: "900",
    },
    inputUsernameStyle: {
        backgroundColor: Colors.White,
        borderRadius: 20,
        paddingLeft: 105,
        paddingRight: 105,
        textAlign: "center",
        borderColor: Colors.ModalTextColor,
        borderWidth: 1,
        color: Colors.Black,
    },
    inputUsernameLabel: {
        color: Colors.ModalTextColor,
        fontWeight: "900",
        marginLeft: 10,
        marginBottom: 5,
    },
    inputEmailStyle: {
        backgroundColor: Colors.White,
        borderRadius: 20,
        paddingLeft: 100,
        paddingRight: 100,
        textAlign: "center",
        borderColor: Colors.ModalTextColor,
        borderWidth: 1,
        color: Colors.Black,
    },
    inputEmailLabel: {
        color: Colors.ModalTextColor,
        fontWeight: "900",
        marginLeft: 10,
        marginTop: "3%",
        marginBottom: 5,
    },
    inputPasswordStyle: {
        backgroundColor: Colors.White,
        borderRadius: 20,
        paddingLeft: 95,
        paddingRight: 95,
        textAlign: "center",
        borderColor: Colors.ModalTextColor,
        borderWidth: 1,
        color: Colors.Black,
    },
    inputPasswordLabel: {
        color: Colors.ModalTextColor,
        fontWeight: "900",
        marginLeft: 10,
        marginTop: "3%",
        marginBottom: 5,
    },
    SignUpButton: {
        borderRadius: 15,
        backgroundColor: Colors.StudentsLoginButtons,
        padding: 10,
        paddingLeft: 125,
        paddingRight: 125,
        marginTop: "5%",
        borderColor: Colors.White,
        borderWidth: 1,
    },
    redText: {
        color: Colors.Danger,
        fontWeight: "700",
    },
    SignUpButtonText: {
        color: Colors.White,
        fontWeight: "900",
        fontSize: 20,
    }
});

export { styles }