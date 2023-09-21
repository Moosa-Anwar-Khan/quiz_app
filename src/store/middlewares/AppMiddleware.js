import { AppAction } from '../actions';
import Store from '..';
import { NavigationService, showToast } from '../../config';
import { put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import firestore from "@react-native-firebase/firestore";
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default class AppMiddleware {

    static *Signup_Teacher({ payload }) {
        try {
            yield firestore().collection("teachers").doc(payload.user_data.id).set(payload.user_data);
            yield auth().currentUser.sendEmailVerification();
            yield auth().signOut();
            showToast("success", "Please check your inbox to verify your Email");
            yield put(AppAction.SignupTeacherSuccess());
            NavigationService.replace("TeacherLogin");
        } catch (err) {
            console.log(err);
        }
    }

    static *Login_Teacher({ payload }) {
        try {
            const isUserLogin = yield auth().signInWithEmailAndPassword(payload.userEmail, payload.userPassword);

            if (isUserLogin.user.emailVerified) {
                AsyncStorage.setItem("teacher_as_user", JSON.stringify(isUserLogin));
                yield put(AppAction.LoginTeacherSuccess(isUserLogin));
                NavigationService.replace("TeacherHomeScreen")
            }

            else {
                showToast("error", "Please verify your Email first")
                auth().currentUser.sendEmailVerification();
            }
        } catch (err) {
            console.log(err);
        }
    }

    static *FB_Login_Teacher() {
        try {
            // Attempt login with permissions
            const result = yield LoginManager.logInWithPermissions(["email", "public_profile", "user_friends"]);

            if (result.isCancelled) {
                throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = yield AccessToken.getCurrentAccessToken();

            if (!data) {
                throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

            // Sign-in the user with the credential
            auth().signInWithCredential(facebookCredential);
            AsyncStorage.setItem("teacher_as_user", JSON.stringify(auth().currentUser));
            yield put(AppAction.FBLoginTeacherSuccess(auth().currentUser));
            NavigationService.replace("TeacherHomeScreen");

        } catch (err) {
            console.log(err);
        }
    }

    static *Google_Login_Teacher() {
        try {
            // Check if your device supports Google Play
            yield GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const { idToken } = yield GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            yield auth().signInWithCredential(googleCredential);
            AsyncStorage.setItem("teacher_as_user", JSON.stringify(auth().currentUser));
            yield put(AppAction.GoogleLoginTeacherSuccess(auth().currentUser));
            NavigationService.replace("TeacherHomeScreen");

        } catch (err) {
            console.log(err);
        }
    }

    static *Logout_Teacher() {
        try {
            // yield auth().signOut();
            AsyncStorage.removeItem("teacher_as_user");
            yield put(AppAction.LogoutTeacherSuccess());
            yield auth().signOut();
            NavigationService.reset_0("TeacherLogin");
        } catch (err) {
            console.log(err)
        }
    }

    static *Get_Teacher_Info_From_Fs() {
        try {
            const userInfo = yield firestore().collection('teachers').doc(auth().currentUser.uid).get();
            yield put(AppAction.GetTeacherFromFsSuccess(userInfo));
        } catch (err) {
            console.log(err)
        }
    }

    static *Add_Quiz_In_Teachers_Record({ payload }) {
        try {
            yield firestore().collection("teachers").doc(auth().currentUser.uid).update({
                quizes: firestore.FieldValue.arrayUnion(payload.quizData)
            });
            showToast("success", "Quiz submitted successfully");
            yield put(AppAction.AddQuizInTeacherRecordSuccess(payload.quizData));
            NavigationService.replace("QuizDetailsPage");
        } catch (err) {
            console.log(err)
        }
    }

    static *Upload_Quiz({ payload }) {
        try {
            yield database().ref(`${payload.quiz_details.quiz_id}`).set({
                Quiz_Details: payload.quiz_details
            })
            yield put(AppAction.UploadQuizSuccess());
            NavigationService.replace("TeacherHomeScreen");
        } catch (err) {
            console.log(err);
        }
    }

    static *View_Students_Marks() {
        try {
            const userData = yield firestore().collection("teachers").doc(auth().currentUser.uid).get();
            if (userData._data.results !== null) {
                put(AppAction.ViewStudentsMarksSuccess(userData._data.results));
            }
        } catch (err) {
            console.log(err);
        }
    }

    static *Get_Previous_Quizes() {
        try {
            const user_data = yield firestore().collection("teachers").doc(auth().currentUser.uid).get();
            if (user_data._data.quizes !== null) {
                console.log("quizes in GetPreviousQuizes middleware: ", user_data._data.quizes);
                put(AppAction.GetPreviousQuizesSuccess(user_data._data.quizes));
            }
        } catch (err) {
            console.log(err);
        }
    }

    static *Signup_Student({ payload }) {
        try {
            yield firestore().collection("students").doc(payload.user_data.id).set(payload.user_data);
            yield auth().currentUser.sendEmailVerification();
            yield auth().signOut();
            showToast("success", "Please check your inbox to verify your Email");
            yield put(AppAction.SignupStudentSuccess());
            NavigationService.replace("StudentLogin");
        } catch (err) {
            console.log(err);
        }
    }

    static *Login_Student({ payload }) {
        try {
            const isUserLogin = yield auth().signInWithEmailAndPassword(payload.userEmail, payload.userPassword);

            if (isUserLogin.user.emailVerified) {
                AsyncStorage.setItem("student_as_user", JSON.stringify(isUserLogin));
                yield put(AppAction.LoginStudentSuccess(isUserLogin));
                NavigationService.replace("StudentHomeScreen")
            }

            else {
                showToast("error", "Please verify your Email first")
                auth().currentUser.sendEmailVerification();
            }
        } catch (err) {
            console.log(err);
        }
    }

    static *FB_Login_Student() {
        try {
            // Attempt login with permissions
            const result = yield LoginManager.logInWithPermissions(["email", "public_profile", "user_friends"]);

            if (result.isCancelled) {
                throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = yield AccessToken.getCurrentAccessToken();

            if (!data) {
                throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

            // Sign-in the user with the credential
            auth().signInWithCredential(facebookCredential);
            AsyncStorage.setItem("student_as_user", JSON.stringify(auth().currentUser));
            yield put(AppAction.FBLoginStudentSuccess(auth().currentUser));
            NavigationService.replace("StudentHomeScreen")

        } catch (err) {
            console.log(err);
        }
    }

    static *Google_Login_Student() {
        try {
            // Check if your device supports Google Play
            yield GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const { idToken } = yield GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            yield auth().signInWithCredential(googleCredential);
            // Sign-in the user with the credential
            AsyncStorage.setItem("student_as_user", JSON.stringify(auth().currentUser));
            yield put(AppAction.GoogleLoginStudentSuccess(auth().currentUser));
            NavigationService.replace("StudentHomeScreen")

        } catch (err) {
            console.log(err);
        }
    }

    static *Logout_Student() {
        try {
            // yield auth().signOut();
            AsyncStorage.removeItem("student_as_user");
            AsyncStorage.removeItem("quiz");
            yield put(AppAction.LogoutStudentSuccess());
            yield auth().signOut();
            NavigationService.reset_0("StudentLogin");
        } catch (err) {
            console.log(err)
        }
    }

    static *Get_Student_Info_From_Fs() {
        try {
            const userInfo = yield firestore().collection('students').doc(auth().currentUser.uid).get();
            yield put(AppAction.GetStudentFromFsSuccess(userInfo));
        } catch (err) {
            console.log(err)
        }
    }

    static *Get_Quiz_Info({ payload }) {
        try {
            const response = yield firestore()
                .collection("students")
                .doc(auth().currentUser.uid)
                .get();

            if (payload.quizID === null) {
                showToast("error", "write Quiz id");
            }

            else if (response._data.quizes_information) {
                const previousQuizesInfo = response._data.quizes_information;
                previousQuizesInfo?.map((item) => {
                    if (item.quiz_id == payload.quizID) {
                        showToast("error", "quiz has already been attempted");
                    }
                })
            }

            else {
                const response = yield database().ref(`${payload.quizID}/Quiz_Details`).on('value', (tempData) => {
                    // setQuestions(tempData.val());
                    const Quiz = tempData.val();
                    AsyncStorage.setItem("quiz", JSON.stringify(Quiz));
                })

                if (response) {
                    yield put(AppAction.GetQuizInfoSuccess(payload.quizID));
                    NavigationService.navigate("QuizApp");
                }

                else {
                    showToast("error", "No such ID exists");
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    static *Add_Quiz_Info_In_Students_Record({ payload }) {
        try {
            yield firestore().collection("students").doc(auth().currentUser.uid).update({
                quizes_information: firestore.FieldValue.arrayUnion(payload.quizInfo)
            });
            yield put(AppAction.AddQuizInfoInStudentsRecordSuccess(payload.quizInfo));
            NavigationService.replace("StudentQuizResultScreen");
            showToast("success", "Quiz done");
        } catch (err) {
            console.log(err)
        }
    }

    static *Submit_Quiz_To_Teacher({ payload }) {
        try {
            yield firestore().collection("teachers").doc(payload.quiz_information.quiz_creator_id).update({
                results: firestore.FieldValue.arrayUnion(payload.quiz_information)
            });
            yield put(AppAction.SubmitQuizToTeacherSuccess());
            NavigationService.replace("StudentHomeScreen");
        } catch (err) {
            console.log(err)
        }
    }

    static *Get_Quiz_Data_From_Real_Time_DB({ payload }) {
        try {
            yield database().ref(`${payload.quiz_id}/Quiz_Details`).on('value', (tempData) => {
                // setQuestions(tempData.val());
                const Quiz = tempData.val();
                AsyncStorage.setItem("quiz", JSON.stringify(Quiz));
            })
            const Quiz_data = JSON.parse(yield AsyncStorage.getItem("quiz"));
            yield put(AppAction.GetQuizDataFromRealTimeDBSuccess(Quiz_data));
        } catch (err) {
            console.log(err)
        }
    }

}