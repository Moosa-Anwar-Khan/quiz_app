import { View } from 'react-native'
import Image from '../../../components/Image'
import React from 'react'
import { styles } from './styles'
import { Colors, Icons, Images } from '../../../config'
import { useDispatch, useSelector } from 'react-redux'
import { AppAction } from '../../../store/actions'
import { ActivityIndicator } from 'react-native'
import { CustomText, PressableComponent } from '../../../components'

const StudentQuizResultScreen = () => {

    const dispatch = useDispatch();

    const Loader = useSelector(state => state.AppReducer.loader);
    const result = useSelector(state => state.AppReducer.studentQuizResult);

    const handleNavigateButton = () => {
        dispatch(AppAction.SubmitQuizToTeacher({ quiz_information: result }));
    }

    return (
        <View style={styles.container}>

            {Loader ? <ActivityIndicator size="large" color={Colors.LoaderColor} /> :

                <View style={styles.container2}>

                    <CustomText.RegularText style={styles.headerText} text="Result" />

                    <Image localImage={Images.resultImage} imageStyle={styles.resultIconImage} 
                    resizeMode={"contain"} />

                    <View style={styles.quizReportView}>

                        <CustomText.TextWithSpan style={styles.quizId} text="Quiz ID: " 
                        spanTextStyle={styles.quizIdSpan} spanText={result?.quiz_id} />

                        <CustomText.TextWithSpan style={styles.quizName} text="Quiz Name: " 
                        spanTextStyle={styles.quizNameSpan} spanText={result?.quiz_name} />    

                        <CustomText.TextWithSpan style={styles.endingTime} text="Ending time: " 
                        spanTextStyle={styles.endingTimeSpan} spanText={result?.ending_time} />    

                        <CustomText.TextWithSpan style={styles.quizScore} text="Quiz Score: " 
                        spanTextStyle={styles.quizScoreSpan} spanText={result?.quiz_score} />    

                    </View>

                    <PressableComponent style={styles.navigateButton} onPress={() => handleNavigateButton()}>
                        <Icons.Fontisto name="navigate" size={24} style={styles.navigateIcon} />
                    </PressableComponent>
                </View>

            }

        </View>
    )
}

export default StudentQuizResultScreen;