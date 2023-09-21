import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from '../../containers';
import Home from '../../containers/Home';
import MakeAQuiz from '../../containers/TeachersModule/MakeAQuiz';
import SelectDateTime from '../../containers/TeachersModule/SelectDateTime';
import AddedQuestionItem from '../../containers/TeachersModule/AddedQuestions';
import TeacherHomeScreen from '../../containers/TeachersModule/Home';
import ViewPreviousQuizes from '../../containers/TeachersModule/ViewPreviousQuizes';
import ViewStudentsMarks from '../../containers/TeachersModule/ViewMarks';
import TeacherLogin from '../../containers/TeachersModule/TeacherLogin';
import TeacherSignUp from '../../containers/TeachersModule/TeacherSignUp';
import QuizDetailsPage from '../../containers/TeachersModule/QuizDetailsPage';
import QuizApp from '../../containers/StudentsModule/QuizApp';
import StudentLogin from '../../containers/StudentsModule/StudentLogin';
import StudentSignUp from '../../containers/StudentsModule/StudentSignup';
import StudentHomeScreen from '../../containers/StudentsModule/Home';
import SearchQuizPage from '../../containers/StudentsModule/SearchQuizPage';
import StudentQuizResultScreen from '../../containers/StudentsModule/StudentQuizResult';
import ViewHistory from '../../containers/StudentsModule/ViewHistory';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const MainStackNavigator = () => {

    // useEffect(() => {
    //     GoogleSignin.configure({
    //         webClientId: "551141387128-18v3fj6m4hnof9is1muddvcq3qpe8j6s.apps.googleusercontent.com"
    //       });
    // },[])

    const Stack = createNativeStackNavigator();


    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{
                headerStyle:{
                    backgroundColor:"#f4511e",
                },
                headerTintColor:"black",
                headerTitleStyle:{
                    fontWeight:"900",
                }, 
                headerTitleAlign:"center",
        }}>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown:false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown:false }} />
            <Stack.Screen name="TeacherLogin" component={TeacherLogin} options={{ headerShown:false }} />
            <Stack.Screen name="TeacherSignUp" component={TeacherSignUp} options={{ title:"Sign up as a Teacher" }} />
            <Stack.Screen name="TeacherHomeScreen" component={TeacherHomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="ViewPreviousQuizes" component={ViewPreviousQuizes} options={{title:"Previous Quizes"}} />
            <Stack.Screen name="ViewStudentsMarks" component={ViewStudentsMarks} options={{title:"Students' Marks"}} />
            <Stack.Screen name="MakeAQuiz" component={MakeAQuiz} options={{ headerShown:false }} />
            <Stack.Screen name="SelectDateTime" component={SelectDateTime} 
            options={{ title:"select time limit for quiz" }}/>
            <Stack.Screen name="QuizDetailsPage" component={QuizDetailsPage} 
            options={{ headerShown:false }} />
            <Stack.Screen name="AddedQuestionsItems" component={AddedQuestionItem} 
            options={{title:"Added Questions"}} />
            <Stack.Screen name="StudentLogin" component={StudentLogin} options={{ headerShown:false }} />
            <Stack.Screen name="StudentSignUp" component={StudentSignUp} options={{ title:"Sign up as a Student" }} />
            <Stack.Screen name="StudentHomeScreen" component={StudentHomeScreen} options={{ headerShown:false }} />
            <Stack.Screen name="ViewHistory" component={ViewHistory} options={{ title:"Previous quizes marks" }} />
            <Stack.Screen name="SearchQuizPage" component={SearchQuizPage} options={{ title:"Search for quiz" }} />
            <Stack.Screen name="QuizApp" component={QuizApp} options={{ headerShown:false }} />
            <Stack.Screen name="StudentQuizResultScreen" component={StudentQuizResultScreen} options={{ headerShown:false }} />
        </Stack.Navigator>
    );
};