import { View, Text, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './styles';
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore";
import { FlatList } from 'react-native';
import Icons from '../../../config/icons';
import { useDispatch, useSelector } from 'react-redux';
import { CustomText } from '../../../components';

const ViewPreviousQuizes = () => {

    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState([]);
    const [quizes, setQuizes] = useState(null);

    useEffect(() => {
        getQuizesFromFS();
        setFilteredData(quizes)
    }, [quizes === null]);

    const getQuizesFromFS = async () => {
        const userData = await firestore().collection("teachers").doc(auth().currentUser.uid).get();
        if (userData._data.quizes !== null) {
            setQuizes(userData._data.quizes)
        }
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = quizes.filter((item) => {
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
            setFilteredData(quizes);
            setSearch(text);
        }
    }

    const item = ({ item, index }) => {

        const questionsItem = ({ item, index }) => {
            return (
                <View style={styles.questionsView}>
                    <Text style={styles.question}>{index + 1}. {item.question}</Text>
                </View>
            );
        }

        return (

            <View style={styles.quizInfoView}>

                <Text style={styles.quizId}>Quiz ID: <Text style={styles.quizIdSpan}>{item.quiz_id}</Text>
                </Text>
                <Text style={styles.quizName}>Quiz Name: <Text style={styles.quizNameSpan}>{item.quiz_name}
                </Text></Text>
                <Text style={styles.questionsHeader}>Questions:</Text>
                <FlatList data={item.questions} renderItem={questionsItem} />
                <Text style={styles.quizEndingTime}>Submit before: <Text style={styles.quizEndingTimeSpan}>
                    {item.ending_time}</Text></Text>
            </View>
        );
    }

    return (
            <View style={styles.container}>

            {quizes === null ?
 
                <CustomText.RegularText style={styles.noHistoryText} text="No history of Quizes" /> :

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

export default ViewPreviousQuizes;