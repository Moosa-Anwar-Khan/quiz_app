import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../../config";

const {height, width} = Dimensions.get("window");

const styles = StyleSheet.create({
    ListView: {
        width:width,
        marginTop:"4%",
    },
    listText: {
        color:Colors.Black,
        fontSize:15,
        backgroundColor:Colors.Smoke,
        textAlign:"center",
    },

    optionsContainer: {
        marginTop:"5%",
    },

    option: {
        borderColor:Colors.Black,
        borderRadius:10,
        backgroundColor:Colors.LightOrange,
        margin:10,
        flexDirection:"row",
        width:"90%",
        padding:5,
        alignItems:"center",
        alignSelf:"center",
        shadowColor: Colors.Black,
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 15,
    },

    optionCircleView: {
        width:20,
        height:20,
        borderRadius:15,
        backgroundColor:Colors.White,
        marginLeft:0,
        alignItems:"center",
        justifyContent:"center",
    },

    optionLetter: {
        fontSize:13,
        fontWeight:"900",
    },

    optionText: {
        fontSize:15,
        padding:10,
        textAlign:"left",
        color:Colors.Black,
        fontWeight:"600"
    }

});

export default styles