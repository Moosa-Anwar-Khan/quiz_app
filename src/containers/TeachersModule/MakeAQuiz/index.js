import { View, Text, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors, showToast } from '../../../config';
import { NavigationService } from '../../../config';
import TeacherMenuModal from '../../../components/Modal/teacherMenuModal';
import auth from '@react-native-firebase/auth';
import { Icons } from '../../../config';
import { useDispatch, useSelector } from 'react-redux';
import { AppAction } from '../../../store/actions';
import StandardButton from '../../../components/Button/StandardButton';
import { CustomText, PressableComponent } from '../../../components';

const MakeAQuiz = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [quizName, setQuizName] = useState(null);
    const [question, setQuestion] = useState(null);
    const [option1, setOption1] = useState(null);
    const [option2, setOption2] = useState(null);
    const [option3, setOption3] = useState(null);
    const [option4, setOption4] = useState(null);
    const [correctIndex, setCorrectIndex] = useState(null);
    const [options, setOptions] = useState(null);
    const [questions, setQuestions] = useState([]);

    const dispatch = useDispatch();

    const current_user = useSelector(state => state.AppReducer.teacherInfoFromFS);

    useEffect(() => {
        dispatch(AppAction.GetTeacherFromFs());
    }, [current_user == null]);

    const handleBackButton = () => {
        try {
            Alert.alert(
                'Are you sure',
                'You want to go back? all questions will be removed',
                [
                    {
                        text: "Yes",
                        onPress: () => {
                            try {
                                NavigationService.navigate("TeacherHomeScreen");
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
        } catch (err) {
            console.log(err)
        }
    }

    const goToTeacherHomePage = () => {
        NavigationService.navigate("TeacherHomeScreen");
    }

    const selectOptionA = () => {
        setCorrectIndex(0);
        setOptions([option1, option2, option3, option4]);
        console.log(options);
    }
    const selectOptionB = () => {
        setCorrectIndex(1);
        setOptions([option1, option2, option3, option4]);
        console.log(options);
    }
    const selectOptionC = () => {
        setCorrectIndex(2);
        setOptions([option1, option2, option3, option4]);
        console.log(options);
    }
    const selectOptionD = () => {
        setCorrectIndex(3);
        setOptions([option1, option2, option3, option4]);
        console.log(options);
    }

    const AddQuestion = () => {
        if (quizName == "" || question == "" || option1 == null || option2 == null || option3 == null || option4 == null) {
            showToast("error", "fill all fields!");
        }
        else if (correctIndex == null) {
            showToast("error", "please select correct option");
        }
        else {
            let newQuestion = {
                question: question,
                options: options,
                correct: correctIndex,
                marked: -1
            }
            setQuestions(oldArray => [...oldArray, newQuestion]);
            setQuestion("");
            setOption1(null);
            setOption2(null);
            setOption3(null);
            setOption4(null);
            setCorrectIndex(null);
            console.log(questions);
        }
    }

    const QuestionsAdded = () => {
        NavigationService.navigate("AddedQuestionsItems", {
            addedQuestions: JSON.stringify(questions),
            nameOfQuiz: quizName
        });
    }

    const resetQuiz = () => {
        try {
            Alert.alert(
                'Are you sure',
                'You want to reset the quiz',
                [
                    {
                        text: "Yes",
                        onPress: () => {
                            try {
                                setQuizName(null);
                                setQuestion(null);
                                setOption1(null);
                                setOption2(null);
                                setOption3(null);
                                setOption4(null);
                                setQuestions([]);
                                setCorrectIndex(null)
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
        } catch (err) {
            console.log(err);
        }
    }

    const finalizeQuizPaper = () => {
        NavigationService.navigate("SelectDateTime", {
            addedQuestions: JSON.stringify(questions),
            nameOfQuiz: quizName
        });
        setQuestions(null);
        setQuizName(null);
    }

    const handleLogout = () => {
        dispatch(AppAction.LogoutTeacher());
    }

    return (

        <KeyboardAwareScrollView style={styles.container}>

            {auth().currentUser?.displayName ?

                <TeacherMenuModal animationType="slide" visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)} myModalContainer={styles.myModal}
                    userIconStyle={styles.modalUserIcon} usernameText={styles.usernameTxt} username={auth().currentUser.displayName} emailText={styles.emailTxt}
                    email={auth().currentUser.email} logoutButtonStyle={styles.logOutButton}
                    logoutButtonOnPress={() => handleLogout()} logoutButtonText={styles.logOutButtonText}
                    settingsButtonStyle={styles.settingsButton} settingsButtonText={styles.settingsButtonText}
                    backModalButtonStyle={styles.backModalButton} backModalButtonOnPress={() => setModalVisible(false)} /> :

                <TeacherMenuModal animationType="slide" visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)} myModalContainer={styles.myModal}
                    userIconStyle={styles.modalUserIcon} usernameText={styles.usernameTxt} username={current_user?._data.name} emailText={styles.emailTxt}
                    email={current_user?._data.email} logoutButtonStyle={styles.logOutButton}
                    logoutButtonOnPress={() => handleLogout()} logoutButtonText={styles.logOutButtonText}
                    settingsButtonStyle={styles.settingsButton} settingsButtonText={styles.settingsButtonText}
                    backModalButtonStyle={styles.backModalButton} backModalButtonOnPress={() => setModalVisible(false)} />
            }


            <View style={styles.backButtonView}>
                <PressableComponent onPress={() => handleBackButton()} style={styles.backButton}>
                    <Icons.AntDesign name="back" size={25} style={styles.backIcon} />
                </PressableComponent>
            </View>

            <View style={styles.optionsBar}>
                <Icons.Entypo name="menu" onPress={() => setModalVisible(true)} size={30} style={styles.menuIcon} />
                <Icons.AntDesign name="home" onPress={() => goToTeacherHomePage()} size={30} style={styles.homeIcon} />
            </View>

            <TextInput style={styles.quizNameField} placeholder='write name of quiz' value={quizName}
                autoCapitalize="none" autoCorrect={false} multiline={true} onChangeText={(q) => setQuizName(q)} />

            <CustomText.RegularText style={styles.headerText} text="Write a question and 4 options to prepare MCQ" />

            <View style={styles.questionsAddedResetView}>
                <PressableComponent style={styles.questionsAddedButton} onPress={() => QuestionsAdded()}>
                    <CustomText.RegularText style={styles.questionsAddedButtonText} 
                    text={`Questions added: ${questions?.length}`} />
                </PressableComponent>

                <PressableComponent style={styles.resetButton} onPress={() => resetQuiz()}>
                    <CustomText.RegularText style={styles.resetButtonText} text="Reset" />
                </PressableComponent>
            </View>

            <CustomText.RegularText style={styles.questionLabel} text="Question:" />
            <TextInput style={styles.questionField} placeholder='write a question' value={question}
                autoCapitalize="none" autoCorrect={false} multiline={true} onChangeText={(q) => setQuestion(q)} />

            <View style={styles.optionsView}>

                <View style={{ flexDirection: "row" }}>
                    <PressableComponent style={[styles.optionAbutton,
                    { backgroundColor: correctIndex == 0 ? Colors.Primary : Colors.White }]}
                        onPress={() => selectOptionA()}>
                        <CustomText.RegularText style={styles.optionAbuttonText} text="A" />
                    </PressableComponent>
                    <TextInput style={styles.option1Field} placeholder='option 1' value={option1}
                        autoCapitalize="none" autoCorrect={false} multiline={true} onChangeText={(op1) => setOption1(op1)} />
                </View>

                <View style={{ flexDirection: "row" }}>
                    <PressableComponent style={[styles.optionBbutton,
                    { backgroundColor: correctIndex == 1 ? Colors.Primary : Colors.White }]}
                        onPress={() => selectOptionB()}>
                        <CustomText.RegularText style={styles.optionBbuttonText} text="B" />
                    </PressableComponent>
                    <TextInput style={styles.option2Field} placeholder='option 2' value={option2}
                        autoCapitalize="none" autoCorrect={false} multiline={true} onChangeText={(op2) => setOption2(op2)} />

                </View>

                <View style={{ flexDirection: "row" }}>
                    <PressableComponent style={[styles.optionCbutton,
                    { backgroundColor: correctIndex == 2 ? Colors.Primary : Colors.White }]}
                        onPress={() => selectOptionC()}>
                        <CustomText.RegularText style={styles.optionCbuttonText} text="C" />
                    </PressableComponent>
                    <TextInput style={styles.option3Field} placeholder='option 3' value={option3}
                        autoCapitalize="none" autoCorrect={false} multiline={true} onChangeText={(op3) => setOption3(op3)} />
                </View>

                <View style={{ flexDirection: "row" }}>
                    <PressableComponent style={[styles.optionDbutton,
                    { backgroundColor: correctIndex == 3 ? Colors.Primary : Colors.White }]}
                        onPress={() => selectOptionD()}>
                            <CustomText.RegularText style={styles.optionDbuttonText} text="D" />
                    </PressableComponent>
                    <TextInput style={styles.option4Field} placeholder='option 4' value={option4}
                        autoCapitalize="none" autoCorrect={false} multiline={true} onChangeText={(op4) => setOption4(op4)} />
                </View>

            </View>

            <StandardButton onPress={() => AddQuestion()} title="Add Question"
                buttonStyle={styles.addQuestion} buttonTextStyle={styles.addQuestionText} />

            {questions?.length ?
                <StandardButton onPress={() => finalizeQuizPaper()} title="Finalize the quiz"
                    buttonStyle={styles.finalizeQuizButton} buttonTextStyle={styles.finalizeQuizButtonText} /> :
                <Text></Text>
            }

        </KeyboardAwareScrollView>

    )
}

export default MakeAQuiz;