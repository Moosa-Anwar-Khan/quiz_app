import { View } from 'react-native'
import React from 'react'
import { Colors, Icons, Images } from '../../../config'
import Image from '../../../components/Image'
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux'
import { AppAction } from '../../../store/actions'
import { ActivityIndicator } from 'react-native'
import { CustomText, PressableComponent } from '../../../components'

const QuizDetailsPage = () => {

    const dispatch = useDispatch();

    const Loader = useSelector(state => state.AppReducer.loader);
    const quiz_details = useSelector(state => state.AppReducer.addedQuiz);

    const handleHomeButton = () => {
        dispatch(AppAction.UploadQuiz({ quiz_details: quiz_details }));
    }

    return (
        <View style={styles.container}>

            {Loader ? <ActivityIndicator size="large" color={Colors.LoaderColor} /> :

                <View style={styles.container2}>
                    
                    <Image localImage={Images.quizTimerImage} imageStyle={styles.quizTimerImage}
                        resizeMode={"contain"} />

                    <View style={styles.quizDetailsLayout}>

                        <CustomText.TextWithSpan style={styles.quizId} text="Quiz ID: " 
                        spanTextStyle={styles.quizIdSpan} spanText={quiz_details?.quiz_id} />

                        <CustomText.TextWithSpan style={styles.quizName} text="Quiz Name: " 
                        spanTextStyle={styles.quizNameSpan} spanText={quiz_details?.quiz_name} />

                        <CustomText.TextWithSpan style={styles.quizCreatedBy} text="Quiz created by: " 
                        spanTextStyle={styles.quizCreatedBySpan} spanText={quiz_details?.creator} />    

                        <CustomText.TextWithSpan style={styles.quizCreatedOn} text="Quiz created on: " 
                        spanTextStyle={styles.quizCreatedOnSpan} spanText={quiz_details?.created_at} />    

                        <CustomText.TextWithSpan style={styles.endTime} text="Ending time: " 
                        spanTextStyle={styles.endTimeSpan} spanText={quiz_details?.ending_time} /> 

                        <PressableComponent onPress={() => handleHomeButton()} style={styles.checkmarkButton}>
                            <Icons.Ionicons name="checkmark-done-circle" size={30} style={styles.checkmarkIcon} />
                        </PressableComponent>

                    </View>
                </View>

            }

        </View>
    )
}

export default QuizDetailsPage