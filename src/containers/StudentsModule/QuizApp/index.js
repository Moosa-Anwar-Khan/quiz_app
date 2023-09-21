import React, { useRef, useState, useEffect } from "react";
import { View, Text, FlatList, Dimensions, Alert } from "react-native";
import styles from "./styles";
import QuestionItem from "../QuestionItem";
import { Colors, Icons, NavigationService } from "../../../config";
import { showToast } from "../../../config";
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from "react-redux";
import { AppAction } from "../../../store/actions";
import { ActivityIndicator } from "react-native";
import StandardButton from "../../../components/Button/StandardButton";
import { PressableComponent } from "../../../components";

const { height, width } = Dimensions.get('window');


const QuizApp = () => {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [questions, setQuestions] = useState(null);
    const [quizName, setQuizName] = useState(null);
    const [quizCreatorID, setQuizCreatorID] = useState(null);
    const [quizEndingTime, setQuizEndingTime] = useState(null);
    const [quizTimeLimit, setQuizTimeLimit] = useState(null);
    const listRef = useRef();

    const dispatch = useDispatch();

    const current_quiz = useSelector(state => state.AppReducer.Quiz);
    const entered_quiz_ID = useSelector(state => state.AppReducer.QuizID);
    const Loader = useSelector(state => state.AppReducer.loader);

    useEffect(() => {
        getQuizFromFB();
        setQuestions(current_quiz?.questions),
            setQuizName(current_quiz?.quiz_name),
            setQuizCreatorID(current_quiz?.creator_id),
            setQuizEndingTime(current_quiz?.ending_time),
            setQuizTimeLimit(current_quiz?.timeLimit)
    }, [current_quiz === null])

    const getQuizFromFB = () => {
        dispatch(AppAction.GetQuizDataFromRealTimeDB({ quiz_id: entered_quiz_ID }));
    }

    const onSelectOption = (index, x) => {
        console.log("selected option$$$$$$$$$$$$$$$$: ", x);
        const tempData = questions;
        tempData.map((item, ind) => {
            if (index == ind) {
                // item.marked = x
                if (item.marked !== -1) {
                    item.marked = -1;
                }
                else {
                    item.marked = x
                }
            }
        });
        let temp = [];
        tempData.map(item => {
            temp.push(item);
        });
        setQuestions(temp);
    }

    const handleNextButton = () => {
        if (questions[currentIndex - 1].marked !== -1) {
            if (currentIndex < questions.length) {
                listRef.current.scrollToIndex({
                    animated: true,
                    index: currentIndex
                })
            }
        }
        else {
            showToast("error", "select any option first");
        }
    }

    const handlePreviousButton = () => {
        if (currentIndex > 1) {
            listRef.current.scrollToIndex({
                animated: true,
                index: parseInt(currentIndex) - 2
            })
        }
    }

    const handleSubmitButton = () => {
        const marks = getTestScore();
        console.log("marks^^^^^^^^^^^^^: ", marks);
        try {
            Alert.alert(
                "Are you sure",
                "You want to submit your quiz",
                [
                    {
                        text: "Yes",
                        onPress: async () => {
                            try {
                                const myScore = marks + "/" + questions?.length;
                                if (quizTimeLimit <= Date.now()) {
                                    showToast("error", "Time limit has been reached.");
                                    NavigationService.navigate("StudentHomeScreen");
                                }
                                else {
                                    const quizInfo = {
                                        quiz_id: entered_quiz_ID,
                                        quiz_name: quizName,
                                        quiz_creator_id: quizCreatorID,
                                        candidate: auth().currentUser.email,
                                        ending_time: quizEndingTime,
                                        quiz_score: myScore
                                    }
                                    dispatch(AppAction.AddQuizInfoInStudentsRecord({ quizInfo: quizInfo }));
                                }
                            } catch (err) {
                                console.log(err)
                            }
                        }
                    },
                    {
                        text: "No",
                        onPress: () => {
                            console.log("cancelled is pressed");
                        }
                    }
                ]
            )
        }
        catch (err) {
            console.log(err);
        }
    }

    const getTestScore = () => {
        let marks = 0;
        questions?.map((item, index) => {
            if (item.marked !== -1) {
                if (item.correct == (item.marked - 1)) {
                    marks += 1;
                }
            }
        });

        return marks;
    }

    const ResetQuiz = () => {
        const tempData = questions;
        tempData.map((item, ind) => {
            item.marked = -1
        });
        let temp = [];
        tempData.map(item => {
            temp.push(item);
        });
        setQuestions(temp);

        listRef.current.scrollToIndex({
            animated: true,
            index: 0
        })
    }

    return (
        <View style={styles.container}>

            {Loader ? <ActivityIndicator size="large" color={Colors.LoaderColor} /> :

                <View style={styles.container2}>

                    <View style={styles.headerView}>
                        <Text style={styles.header}>Question: {currentIndex}/{questions?.length}</Text>
                        <StandardButton onPress={() => ResetQuiz()} title="Reset"
                            buttonStyle={styles.resetButton} buttonTextStyle={styles.resetButtonText} />
                    </View>

                    <View style={styles.quizDetails}>
                        <Text style={styles.quizName}>{quizName}</Text>
                        <Text style={styles.quizEndingTime}>Quiz will end on:  <Text style={styles.quizEndingTimeSpan}>
                            {quizEndingTime}</Text></Text>
                    </View>

                    <View style={styles.myListView}>

                        <FlatList
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            ref={listRef}
                            onScroll={e => {
                                const x = (e.nativeEvent.contentOffset.x / width) + 1;
                                setCurrentIndex(x.toFixed(0));
                            }}
                            data={questions}
                            renderItem={({ item, index }) => {
                                return <QuestionItem data={item} selectedOption={(x) => {
                                    onSelectOption(index, x)
                                }} />
                            }}
                        />

                    </View>

                    <View style={styles.nextPrevButtonsView}>

                        {currentIndex == 1 ? 
                            <PressableComponent style={[styles.previousButton,
                            { backgroundColor: "#bdbdbd" }]} disabled={true}>
                                <Text style={styles.previousButtonText}>
                                    <Icons.AntDesign name="caretleft" color="#ffffff" />
                                </Text>
                            </PressableComponent> :
                            
                            <PressableComponent style={styles.previousButton} onPress={() => handlePreviousButton()}>
                                <Text style={styles.previousButtonText}>
                                    <Icons.AntDesign name="caretleft" color="#ffffff" />
                                </Text>
                            </PressableComponent>
                        }

                        {currentIndex == questions?.length ?
                            
                            <PressableComponent style={styles.submitButton} onPress={() => handleSubmitButton()}>
                                <Text style={styles.submitButtonText}>Submit</Text>
                            </PressableComponent>
                            :
                            
                            <PressableComponent style={styles.nextButton} onPress={() => handleNextButton()}>
                                <Text style={styles.nextButtonText}>
                                    <Icons.AntDesign name="caretright" color="#ffffff" />
                                </Text>
                            </PressableComponent>
                        }

                    </View>

                </View>

            }

        </View>
    )

}

export default QuizApp;