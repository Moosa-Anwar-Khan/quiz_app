import {
    SIGN_UP_TEACHER, SIGN_UP_TEACHER_SUCCESS, SIGN_UP_STUDENT, SIGN_UP_STUDENT_SUCCESS, 
    LOGIN_TEACHER, LOGIN_TEACHER_SUCCESS, LOGIN_TEACHER_FB, LOGIN_TEACHER_FB_SUCCESS, LOGIN_TEACHER_GOOGLE, 
    LOGIN_TEACHER_GOOGLE_SUCCESS,
    LOGIN_STUDENT, LOGIN_STUDENT_SUCCESS, LOGIN_STUDENT_FB, LOGIN_STUDENT_FB_SUCCESS, LOGIN_STUDENT_GOOGLE, 
    LOGIN_STUDENT_GOOGLE_SUCCESS,
    LOGOUT_TEACHER, LOGOUT_TEACHER_SUCCESS, LOGOUT_STUDENT, LOGOUT_STUDENT_SUCCESS, 
    GET_TEACHER_INFO_FROM_FS, GET_TEACHER_INFO_FROM_FS_SUCCESS, GET_STUDENT_INFO_FROM_FS,
    GET_STUDENT_INFO_FROM_FS_SUCCESS,
    ADD_QUIZ_IN_TEACHERS_RECORD, ADD_QUIZ_IN_TEACHERS_RECORD_SUCCESS,
    UPLOAD_QUIZ, UPLOAD_QUIZ_SUCCESS,
    VIEW_STUDENTS_MARKS, VIEW_STUDENTS_MARKS_SUCCESS,
    GET_PREVIOUS_QUIZES_INFO, GET_PREVIOUS_QUIZES_INFO_SUCCESS,
    GET_QUIZ_INFO, GET_QUIZ_INFO_SUCCESS,
    ADD_QUIZ_INFO_IN_STUDENTS_RECORD, ADD_QUIZ_INFO_IN_STUDENTS_RECORD_SUCCESS,
    SUBMIT_QUIZ_TO_TEACHER, SUBMIT_QUIZ_TO_TEACHER_SUCCESS, 
    QUIZ_DATA_FROM_REAL_TIME_DB, QUIZ_DATA_FROM_REAL_TIME_DB_SUCCESS,
} from '../constants'


export default class AppAction {

    /**********************************Actions for Teacher's module *************************************/
    static SignupTeacher(payload) {
        return {
            type: SIGN_UP_TEACHER,
            payload
        }
    }

    static SignupTeacherSuccess() {
        return {
            type: SIGN_UP_TEACHER_SUCCESS,
        }
    }

    static LoginTeacher(payload) {
        return {
            type: LOGIN_TEACHER,
            payload
        }
    }

    static LoginTeacherSuccess(payload) {
        return {
            type: LOGIN_TEACHER_SUCCESS,
            payload
        }
    }

    static FBLoginTeacher() {
        return {
            type: LOGIN_TEACHER_FB
        }
    }

    static FBLoginTeacherSuccess(payload) {
        return {
            type: LOGIN_TEACHER_FB_SUCCESS,
            payload
        }
    }

    static GoogleLoginTeacher() {
        return {
            type: LOGIN_TEACHER_GOOGLE
        }
    }

    static GoogleLoginTeacherSuccess(payload) {
        return {
            type: LOGIN_TEACHER_GOOGLE_SUCCESS,
            payload
        }
    }

    static LogoutTeacher() {
        return {
            type: LOGOUT_TEACHER,
        }
    }

    static LogoutTeacherSuccess() {
        return {
            type: LOGOUT_TEACHER_SUCCESS,
        }
    }

    static GetTeacherFromFs() {
        return {
            type: GET_TEACHER_INFO_FROM_FS,
        }
    }

    static GetTeacherFromFsSuccess(payload) {
        return {
            type: GET_TEACHER_INFO_FROM_FS_SUCCESS,
            payload
        }
    }

    static AddQuizInTeacherRecord(payload) {
        return {
            type: ADD_QUIZ_IN_TEACHERS_RECORD,
            payload
        }
    }

    static AddQuizInTeacherRecordSuccess(payload) {
        return {
            type: ADD_QUIZ_IN_TEACHERS_RECORD_SUCCESS,
            payload
        }
    }

    static UploadQuiz(payload) {
        return {
            type: UPLOAD_QUIZ,
            payload
        }
    }

    static UploadQuizSuccess() {
        return {
            type: UPLOAD_QUIZ_SUCCESS,
        }
    }

    static ViewStudentsMarks() {
        return {
            type: VIEW_STUDENTS_MARKS,
        }
    }

    static ViewStudentsMarksSuccess(payload) {
        return {
            type: VIEW_STUDENTS_MARKS_SUCCESS,
            payload
        }
    }

    static GetPreviousQuizes() {
        return {
            type: GET_PREVIOUS_QUIZES_INFO,
        }
    }

    static GetPreviousQuizesSuccess(payload) {
        return {
            type: GET_PREVIOUS_QUIZES_INFO_SUCCESS,
            payload
        }
    }
    /*************************************************************************************************/


    /**********************************Actions for Student's module *************************************/
    static SignupStudent(payload) {
        return {
            type: SIGN_UP_STUDENT,
            payload
        }
    }

    static SignupStudentSuccess() {
        return {
            type: SIGN_UP_STUDENT_SUCCESS,
        }
    }

    static LoginStudent(payload) {
        return {
            type: LOGIN_STUDENT,
            payload
        }
    }

    static LoginStudentSuccess(payload) {
        return {
            type: LOGIN_STUDENT_SUCCESS,
            payload
        }
    }

    static FBLoginStudent() {
        return {
            type: LOGIN_STUDENT_FB
        }
    }

    static FBLoginStudentSuccess(payload) {
        return {
            type: LOGIN_STUDENT_FB_SUCCESS,
            payload
        }
    }

    static GoogleLoginStudent() {
        return {
            type: LOGIN_STUDENT_GOOGLE
        }
    }

    static GoogleLoginStudentSuccess(payload) {
        return {
            type: LOGIN_STUDENT_GOOGLE_SUCCESS, 
            payload
        }
    }

    static LogoutStudent() {
        return {
            type: LOGOUT_STUDENT,
        }
    }

    static LogoutStudentSuccess() {
        return {
            type: LOGOUT_STUDENT_SUCCESS,
        }
    }

    static GetStudentFromFs() {
        return {
            type: GET_STUDENT_INFO_FROM_FS,
        }
    }

    static GetStudentFromFsSuccess(payload) {
        return {
            type: GET_STUDENT_INFO_FROM_FS_SUCCESS,
            payload
        }
    }
    

    static GetQuizInfo(payload) {
        return {
            type: GET_QUIZ_INFO,
            payload
        }
    }

    static GetQuizInfoSuccess(payload) {
        return {
            type: GET_QUIZ_INFO_SUCCESS,
            payload
        }
    }

    static AddQuizInfoInStudentsRecord(payload) {
        return {
            type: ADD_QUIZ_INFO_IN_STUDENTS_RECORD,
            payload
        }
    }

    static AddQuizInfoInStudentsRecordSuccess(payload) {
        return {
            type: ADD_QUIZ_INFO_IN_STUDENTS_RECORD_SUCCESS,
            payload
        }
    }

    static SubmitQuizToTeacher(payload) {
        return {
            type: SUBMIT_QUIZ_TO_TEACHER,
            payload
        }
    }

    static SubmitQuizToTeacherSuccess() {
        return {
            type: SUBMIT_QUIZ_TO_TEACHER_SUCCESS,
        }
    }
    /*************************************************************************************************/

    static GetQuizDataFromRealTimeDB(payload) {
        return {
            type: QUIZ_DATA_FROM_REAL_TIME_DB,
            payload
        }
    }

    static GetQuizDataFromRealTimeDBSuccess(payload) {
        return {
            type: QUIZ_DATA_FROM_REAL_TIME_DB_SUCCESS,
            payload
        }
    }

}