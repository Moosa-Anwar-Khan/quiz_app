import { View, Text, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './styles';
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore";
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Icons } from '../../../config';
import { CustomText } from '../../../components';

const ViewStudentsMarks = () => {

    const [results, setResults] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        getQuizesFromFS();
        setFilteredData(results);
    }, [results === null]);

    const getQuizesFromFS = async () => {
        const userData = await firestore().collection("teachers").doc(auth().currentUser.uid).get();
        if (userData._data.results !== null) {
            setResults(userData._data.results)
        }
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = results.filter((item) => {
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
            setFilteredData(results);
            setSearch(text);
        }
    }

    const item = ({ item, index }) => {

        return (
            <View style={styles.quizInfoView}>
                <Text style={styles.quizId}>{index + 1}. Quiz ID: <Text style={styles.quizIdSpan}>
                    {item.quiz_id}</Text></Text>
                <Text style={styles.quizName}>Quiz Name: <Text style={styles.quizNameSpan}>{item.quiz_name}</Text>
                </Text>
                <Text style={styles.candidate}>Candidate: <Text style={styles.candidateSpan}>{item.candidate}
                </Text></Text>
                <Text style={styles.score}>Score: <Text tyle={styles.scoreSpan}>{item.quiz_score}</Text></Text>
            </View>
        );
    }

    return (

        <View style={styles.container}>

            {results === null ?

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

export default ViewStudentsMarks;