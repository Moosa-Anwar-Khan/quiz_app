import { View, FlatList, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './styles';
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore";
import { Icons } from '../../../config';
import { CustomText } from '../../../components';

const ViewHistory = () => {

    const [quizesInfo, setQuizesInfo] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        getQuizesInfoFromFS();
        setFilteredData(quizesInfo);
    }, [quizesInfo === null]);

    const getQuizesInfoFromFS = async () => {
        const userData = await firestore().collection("students").doc(auth().currentUser.uid).get();
        if (userData._data.quizes !== null) {
            setQuizesInfo(userData._data.quizes_information)
        }
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = quizesInfo.filter((item) => {
                const itemData = item.quiz_name ?
                    item.quiz_name.toUpperCase() :
                    ''.toUpperCase();

                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
            setSearch(text);
        }
        else {
            setFilteredData(quizesInfo);
            setSearch(text);
        }
    }

    const item = ({ item, index }) => {

        return (
            <View style={styles.quizInfoView}>
                
                <CustomText.TextWithSpan style={styles.quizId} text={`${index+1}. Quiz ID: `} 
                spanTextStyle={styles.quizIdSpan} spanText={item.quiz_id} />
                
                <CustomText.TextWithSpan style={styles.quizName} text="Quiz Name: " 
                spanTextStyle={styles.quizNameSpan} spanText={item.quiz_name} />
                
                <CustomText.TextWithSpan style={styles.score} text="Score: " spanTextStyle={styles.scoreSpan} 
                spanText={item.quiz_score} />
                
                <CustomText.TextWithSpan style={styles.quizEndingTime} text="Submit before: " 
                spanTextStyle={styles.quizEndingTimeSpan} spanText={item.ending_time} />   

            </View>
        );
    }

    return (

        <View style={styles.container}>

            {quizesInfo === null ?

                <CustomText.RegularText style={styles.noHistoryText} text="No history of Marks" /> :

                <View style={styles.view}>

                    <View style={styles.searchTextInputView}>
                        <TextInput style={styles.searchTextInput} placeholder='Search through quiz name' value={search}
                            autoCapitalize="none" autoCorrect={false} onChangeText={(s) => searchFilter(s)}
                            multiline={true} />
                        <Icons.FontAwesome name="search" size={25} style={styles.searchIcon} />
                    </View>

                    <FlatList
                        data={filteredData}
                        renderItem={item}
                        style={{ height: "85%" }}
                    />
                </View>

            }

        </View>
    )
}

export default ViewHistory;