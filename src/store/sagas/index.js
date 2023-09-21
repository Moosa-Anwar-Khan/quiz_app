import { AppMiddleware } from "../middlewares"
import { takeLatest, all } from 'redux-saga/effects'
import { 
    SIGN_UP_TEACHER, SIGN_UP_STUDENT, 
    LOGIN_TEACHER, LOGIN_STUDENT, 
    LOGOUT_TEACHER, LOGOUT_STUDENT, 
    GET_TEACHER_INFO_FROM_FS, GET_STUDENT_INFO_FROM_FS,
    ADD_QUIZ_IN_TEACHERS_RECORD, 
    UPLOAD_QUIZ, 
    VIEW_STUDENTS_MARKS, 
    GET_PREVIOUS_QUIZES_INFO, 
    GET_QUIZ_INFO, 
    ADD_QUIZ_INFO_IN_STUDENTS_RECORD, 
    SUBMIT_QUIZ_TO_TEACHER, 
    QUIZ_DATA_FROM_REAL_TIME_DB,
    LOGIN_TEACHER_FB,
    LOGIN_STUDENT_FB,
    LOGIN_TEACHER_GOOGLE,
    LOGIN_STUDENT_GOOGLE,
 } from "../constants"

export function* Sagas() {
    yield all([
        yield takeLatest(SIGN_UP_TEACHER, AppMiddleware.Signup_Teacher),
        yield takeLatest(LOGIN_TEACHER, AppMiddleware.Login_Teacher),
        yield takeLatest(LOGIN_TEACHER_FB, AppMiddleware.FB_Login_Teacher),
        yield takeLatest(LOGIN_TEACHER_GOOGLE, AppMiddleware.Google_Login_Teacher),
        yield takeLatest(LOGOUT_TEACHER, AppMiddleware.Logout_Teacher),
        yield takeLatest(GET_TEACHER_INFO_FROM_FS, AppMiddleware.Get_Teacher_Info_From_Fs),
        yield takeLatest(ADD_QUIZ_IN_TEACHERS_RECORD, AppMiddleware.Add_Quiz_In_Teachers_Record),
        yield takeLatest(UPLOAD_QUIZ, AppMiddleware.Upload_Quiz),
        yield takeLatest(VIEW_STUDENTS_MARKS, AppMiddleware.View_Students_Marks),
        yield takeLatest(GET_PREVIOUS_QUIZES_INFO, AppMiddleware.Get_Previous_Quizes),
        yield takeLatest(SIGN_UP_STUDENT, AppMiddleware.Signup_Student),
        yield takeLatest(LOGIN_STUDENT, AppMiddleware.Login_Student),
        yield takeLatest(LOGIN_STUDENT_FB, AppMiddleware.FB_Login_Student),
        yield takeLatest(LOGIN_STUDENT_GOOGLE, AppMiddleware.Google_Login_Student),
        yield takeLatest(LOGOUT_STUDENT, AppMiddleware.Logout_Student),
        yield takeLatest(GET_STUDENT_INFO_FROM_FS, AppMiddleware.Get_Student_Info_From_Fs),
        yield takeLatest(GET_QUIZ_INFO, AppMiddleware.Get_Quiz_Info),
        yield takeLatest(ADD_QUIZ_INFO_IN_STUDENTS_RECORD, AppMiddleware.Add_Quiz_Info_In_Students_Record),
        yield takeLatest(SUBMIT_QUIZ_TO_TEACHER, AppMiddleware.Submit_Quiz_To_Teacher),
        yield takeLatest(QUIZ_DATA_FROM_REAL_TIME_DB, AppMiddleware.Get_Quiz_Data_From_Real_Time_DB),
    ])
}