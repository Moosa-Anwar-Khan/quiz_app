import { StyleSheet } from "react-native";
import { Colors } from "../../../config";

const styles = StyleSheet.create({
    container: {
       
    },

    headerView: {
        flexDirection:"row",
        marginTop:"5%"
    },

    quizDetails: {
        justifyContent:"center",
        alignItems:"center",
    },

    quizName: {
        color:Colors.Black,
        fontWeight:"900",
        fontSize:17
    },

    quizEndingTime: {
        marginTop:"1%",
        color:Colors.Black,
        fontWeight:"400",
    },

    quizEndingTimeSpan: {
        color:Colors.Success,
        fontWeight:"900",
    },

    resetButton: {
        marginLeft:"60%",
        backgroundColor:Colors.Primary,
        padding:10,
        borderRadius:10,
        shadowColor: Colors.Black,
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 15,
    },

    resetButtonText: {
        color:Colors.White,
        fontWeight:"900"
    },

    header:{
        color:Colors.Black,
        fontWeight:"700",
    },

    myListView: {
        marginTop:"2%",
    },

    nextPrevButtonsView: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:120,
        width:"100%",
    },

    previousButton: {
        backgroundColor:Colors.Primary,
        padding:10,
        paddingLeft:20,
        paddingRight:20,
        marginLeft:"6%",
        borderRadius:15,
        shadowColor: Colors.Black,
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 15,
    },

    previousButtonText: {
        color:Colors.White,
        fontWeight:"900",
    },

    nextButton: {
        backgroundColor:Colors.Primary,
        padding:10,
        paddingLeft:20,
        paddingRight:20,
        marginRight:"6%",
        borderRadius:15,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 15,
    },

    nextButtonText: {
        color:"#ffffff",
        fontWeight:"900",
    },

    submitButton: {
        backgroundColor:"#2ab03e",
        padding:10,
        paddingLeft:20,
        paddingRight:20,
        marginRight:"6%",
        borderRadius:15,
        shadowColor: Colors.Black,
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 15,
    },

    submitButtonText: {
        color:Colors.White,
        fontWeight:"900",
    }, 

    submitModal: {
        flex:1,
        backgroundColor:"rgb(0,0,0,0.5)",
        justifyContent:"center",
        alignItems:"center",

    },

    submitModal2: {
        backgroundColor:Colors.White,
        borderColor:Colors.Smoke,
        borderWidth:1,
        width:"90%",
        height:250,
        borderRadius:10,
        opacity:0.9,
        shadowColor: Colors.Black,
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 15,
    },
    
    scoreText: {
        fontWeight:"700",
        fontSize:30,
        textAlign:"center",
        marginTop:"2%",
        color:Colors.Gray
    },

    score: {
        fontWeight:"900",
        fontSize:35,
        textAlign:"center",
        marginTop:"5%",
        color:Colors.Black
    },

    checkmarkButton: {
        backgroundColor:Colors.Primary,
        marginLeft:"15%",
        marginRight:"15%",
        marginTop:"10%",
        borderRadius:20,
        shadowColor: Colors.Black,
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 15,
        padding:10,
    },

    checkmarkIcon: {
        textAlign:"center",
    }, 
    
})

export default styles