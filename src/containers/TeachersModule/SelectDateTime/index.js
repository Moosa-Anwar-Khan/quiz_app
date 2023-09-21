import { Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { showToast } from '../../../config';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useRoute } from '@react-navigation/native';
import { Icons } from '../../../config';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { AppAction } from '../../../store/actions';
import StandardButton from '../../../components/Button/StandardButton';
import { CustomText, PressableComponent } from '../../../components';
import { LogBox } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useEffect } from 'react';
import { Alert } from 'react-native';


const SelectDateTime = () => {

    const route = useRoute();
    const { addedQuestions, nameOfQuiz } = route.params;
    const myQuestions = JSON.parse(addedQuestions);

    const [questions, setQuestions] = useState(myQuestions);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [date, setDate] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [hour, setHour] = useState();
    const [minutes, setMinutes] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
      }, []);

    const deleteQuestion = (item,ind) => {
        try {
            Alert.alert(
                'Are you sure',
                `You want to delete question, "${item.question}"`,
                [
                    {
                        text: "Yes",
                        onPress: () => {
                            try {
                                let filteredQuestions = questions.filter((it, i) => {
                                    if(i !== ind) {
                                        return it
                                    }
                                })
                                setQuestions(filteredQuestions);
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
        } catch(err) {
            console.log(err);
        }
    }


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false)
    }

    const handleDateConfirm = (date) => {
        console.log("A date has been picked: ", date);
        setDate(date.getDate());
        setMonth(date.getMonth());
        setYear(date.getFullYear());
        hideDatePicker();
    };

    const handleTimeConfirm = (time) => {
        console.log("time has been picked: ", time);
        setHour(time.getHours());
        setMinutes(time.getMinutes());
        hideTimePicker();
    };

    const submitQuizPaper = async () => {
        try {
            if (date == null || month == null || year == null || hour == null || minutes == null) {
                showToast("error", "select ending date and time for quiz");
            }
            else {
                const dateSelected = new Date(year, month, date, hour, minutes);
                const parsedDate = Date.parse(dateSelected);
                console.log("parsedDate@@@@@@@: ", parsedDate);

                const current_Date = new Date();
                const currentDate = current_Date.getDate();
                const currentMonth = current_Date.getMonth() + 1;
                const currentYear = current_Date.getFullYear();
                const quizCreatedOn = currentDate + "/" + currentMonth + "/" + currentYear;
                const endingMonth = month + 1;
                const endingTime = date + "/" + endingMonth + "/" + year + ", " + hour + ":" + minutes;

                const quizData = {
                    quiz_id: Date.now(),
                    quiz_name: nameOfQuiz,
                    questions: questions,
                    timeLimit: parsedDate,
                    creator_id: auth().currentUser.uid,
                    creator: auth().currentUser.email,
                    created_at: quizCreatedOn,
                    ending_time: endingTime
                }
                
                Alert.alert(
                    'Are you sure',
                    `You want to submit quiz, "${nameOfQuiz}"`,
                    [
                        {
                            text: "Yes",
                            onPress: () => {
                                try {
                                    dispatch(AppAction.AddQuizInTeacherRecord({ quizData: quizData }));
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
        } catch (err) {
            console.log(err);
        }
    }

    const item = ({ item, index }) => {

        const optionsItem = ({ item, index }) => {
            return (
                <CustomText.TextWithSpan style={styles.option} text={`${index + 1}. `} 
                spanTextStyle={styles.optionSpan} spanText={item} />
            );
        }

        return (
            <TouchableOpacity style={styles.addedQuestionsView}>
                
                <CustomText.RegularText style={styles.questionHeader} text={`Question ${index + 1}`} />
            
                <CustomText.TextWithSpan style={styles.questionStatement} text="Question: " 
                spanTextStyle={styles.questionStatementSpan} spanText={item.question} />
                
                <CustomText.RegularText style={styles.optionsHeader} text="Options:" />

                <FlatList data={item.options} renderItem={optionsItem} style={styles.optionsFlatlist} />
    
                <CustomText.TextWithSpan style={styles.correctOption} text="correct option: " 
                spanTextStyle={styles.correctOptionSpan} spanText={item.options[item.correct]} />

                <Icons.MaterialCommunityIcons name="delete" size={20} style={styles.deleteIcon} 
                onPress={() => deleteQuestion(item,index)} />
            </TouchableOpacity>
        );
    }



    return (
        <KeyboardAwareScrollView style={styles.container}>

            <CustomText.RegularText style={styles.nameOfQuizText} text={nameOfQuiz} />

            <FlatList
                data={questions}
                renderItem={item}
                style={{ height: 450, }}
            />

        
            <StandardButton onPress={showDatePicker} title="Select Date"
                buttonStyle={styles.selectDateButton} buttonTextStyle={styles.selectDateButtonText} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
            />
            {date == null ? <Text></Text> : <Text style={styles.dateText}>{date}/{month + 1}/{year}</Text>}


            <StandardButton onPress={showTimePicker} title="Select Time"
                buttonStyle={styles.selectTimeButton} buttonTextStyle={styles.selectTimeButtonText} />
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
            />
            {hour == null ? <Text></Text> : <Text style={styles.timeText}>{hour}:{minutes}</Text>}

            <PressableComponent style={styles.submitButton} onPress={() => submitQuizPaper()}>
                <CustomText.RegularText style={styles.submitButtonText} text="Submit quiz paper" />
                <Icons.FontAwesome name="send" size={20} style={styles.sendIcon} />
            </PressableComponent>

        </KeyboardAwareScrollView>

    );

}

export default SelectDateTime;