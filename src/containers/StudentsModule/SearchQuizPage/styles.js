import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../../config";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.White,
    },

    findQuizImage: {
        width:200,
        height:200,
        borderColor:Colors.White,
        marginLeft:"13%",
    },

    inputQuizIdStyleLabel: {
        color: Colors.Primary,
        fontWeight: "900",
        fontSize: 20,
        textAlign:"center",
    },

    inputQuizIdStyle: {
        backgroundColor: Colors.White,
        borderRadius: 20,
        padding:10,
        paddingLeft:130,
        paddingRight:130,
        marginTop: "2%",
        borderColor: Colors.Primary,
        borderWidth: 1,
        color: Colors.Black,
    },

    searchButton: {
        backgroundColor:Colors.Primary,
        padding:10,
        marginTop:"5%",
        borderRadius:15,
    },

    searchIcon: {
        textAlign:"center",
        color:Colors.Black
    }

});

export { styles }