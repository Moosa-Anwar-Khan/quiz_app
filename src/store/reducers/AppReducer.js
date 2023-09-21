import {
    SIGN_UP_TEACHER, SIGN_UP_TEACHER_SUCCESS, SIGN_UP_STUDENT, SIGN_UP_STUDENT_SUCCESS,
    LOGIN_TEACHER, LOGIN_TEACHER_SUCCESS, LOGIN_TEACHER_FB, LOGIN_TEACHER_FB_SUCCESS,
    LOGIN_STUDENT, LOGIN_STUDENT_SUCCESS, LOGIN_STUDENT_FB, LOGIN_STUDENT_FB_SUCCESS,
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
    QUIZ_DATA_FROM_REAL_TIME_DB, QUIZ_DATA_FROM_REAL_TIME_DB_SUCCESS, GET_STUDENT_INFO_AS_FB_USER_SUCCESS, 
    GET_STUDENT_INFO_AS_FB_USER, LOGIN_TEACHER_GOOGLE, LOGIN_TEACHER_GOOGLE_SUCCESS, LOGIN_STUDENT_GOOGLE, 
    LOGIN_STUDENT_GOOGLE_SUCCESS,
} from '../constants';

const initialState = {
    teacherAsUser: null,
    studentAsUser: null,
    teacherAsUserFB: null,
    studentAsUserFB: null,
    teacherAsUserGoogle: null,
    studentAsUserGoogle: null,
    teacherInfoFromFS: null,
    studentInfoFromFS: null,
    addedQuiz: null,
    studentsResultInTeachersRecord: null,
    previousQuizesInTeachersRecord: null,
    QuizID: null,
    Quiz: null,
    studentQuizResult: null,
    loader: false,
}

export default function AppReducer(state = initialState, action) {
    switch (action.type) {

        /********************************** Reducer for Teacher's module ***********************************/
        case SIGN_UP_TEACHER:
            state = {
                ...state,
            }
            break;

        case SIGN_UP_TEACHER_SUCCESS:
            state = {
                ...state,
            }
            break;

        case LOGIN_TEACHER:
            state = {
                ...state,
                loader: true
            }
            break;

        case LOGIN_TEACHER_SUCCESS:
            state = {
                ...state,
                loader: false,
                teacherAsUser: action.payload
            }
            break;

        case LOGIN_TEACHER_FB:
            state = {
                ...state,
                loader: true,
            }
            break;

        case LOGIN_TEACHER_FB_SUCCESS:
            state = {
                ...state,
                loader: false,
                teacherAsUserFB: action.payload
            }
            break;

        case LOGIN_TEACHER_GOOGLE:
            state = {
                ...state,
                loader: true,
            }
            break;

        case LOGIN_TEACHER_GOOGLE_SUCCESS:
            state = {
                ...state,
                loader: false,
                teacherAsUserGoogle: action.payload
            }
            break;

        case LOGOUT_TEACHER:
            state = {
                ...state,
                loader: true
            }
            break;

        case LOGOUT_TEACHER_SUCCESS:
            state = {
                teacherAsUser: null,
                studentAsUser: null,
                teacherAsUserFB: null,
                studentAsUserFB: null,
                teacherAsUserGoogle: null,
                studentAsUserGoogle: null,
                teacherInfoFromFS: null,
                studentInfoFromFS: null,
                addedQuiz: null,
                studentsResultInTeachersRecord: null,
                previousQuizesInTeachersRecord: null,
                QuizID: null,
                Quiz: null,
                studentQuizResult: null,
                loader: false,
            }
            break;

        case GET_TEACHER_INFO_FROM_FS:
            state = {
                ...state,
                loader: true
            }
            break;

        case GET_TEACHER_INFO_FROM_FS_SUCCESS:
            state = {
                ...state,
                loader: false,
                teacherInfoFromFS: action.payload
            }
            break;

        case ADD_QUIZ_IN_TEACHERS_RECORD:
            state = {
                ...state,
                loader: true
            }
            break;

        case ADD_QUIZ_IN_TEACHERS_RECORD_SUCCESS:
            state = {
                ...state,
                loader: false,
                addedQuiz: action.payload
            }
            break;

        case UPLOAD_QUIZ:
            state = {
                ...state,
                loader: true,
            }
            break;

        case UPLOAD_QUIZ_SUCCESS:
            state = {
                ...state,
                loader: false,
                addedQuiz: null
            }
            break;

        case VIEW_STUDENTS_MARKS:
            state = {
                ...state,
                loader: true,
            }
            break;

        case VIEW_STUDENTS_MARKS_SUCCESS:
            state = {
                ...state,
                loader: false,
                studentsResultInTeachersRecord: action.payload
            }
            break;

        case GET_PREVIOUS_QUIZES_INFO:
            state = {
                ...state,
                loader: true,
            }
            break;

        case GET_PREVIOUS_QUIZES_INFO_SUCCESS:
            state = {
                ...state,
                loader: false,
                previousQuizesInTeachersRecord: action.payload
            }
            break;

        /*******************************************************************************************/

        /********************************** Reducer for Student's module ***********************************/
        case SIGN_UP_STUDENT:
            state = {
                ...state,
            }
            break;

        case SIGN_UP_STUDENT_SUCCESS:
            state = {
                ...state,
            }
            break;

        case LOGIN_STUDENT:
            state = {
                ...state,
                loader: true
            }
            break;

        case LOGIN_STUDENT_SUCCESS:
            state = {
                ...state,
                loader: false,
                studentAsUser: action.payload
            }
            break;

        case LOGIN_STUDENT_FB:
            state = {
                ...state,
                loader: true,
            }
            break;

        case LOGIN_STUDENT_FB_SUCCESS:
            state = {
                ...state,
                loader: false,
                studentAsUserFB: action.payload
            }
            break;

        case LOGIN_STUDENT_GOOGLE:
            state = {
                ...state,
                loader: true,
            }
            break;

        case LOGIN_STUDENT_GOOGLE_SUCCESS:
            state = {
                ...state,
                loader: false,
                studentAsUserGoogle: action.payload
            }
            break;

        case LOGOUT_STUDENT:
            state = {
                ...state,
                loader: true
            }
            break;

        case LOGOUT_STUDENT_SUCCESS:
            state = {
                teacherAsUser: null,
                studentAsUser: null,
                teacherAsUserFB: null,
                studentAsUserFB: null,
                teacherAsUserGoogle: null,
                studentAsUserGoogle: null,
                teacherInfoFromFS: null,
                studentInfoFromFS: null,
                addedQuiz: null,
                studentsResultInTeachersRecord: null,
                previousQuizesInTeachersRecord: null,
                QuizID: null,
                Quiz: null,
                studentQuizResult: null,
                loader: false,
            }
            break;

        case GET_STUDENT_INFO_FROM_FS:
            state = {
                ...state,
                loader: true
            }
            break;

        case GET_STUDENT_INFO_FROM_FS_SUCCESS:
            state = {
                ...state,
                loader: false,
                studentInfoFromFS: action.payload
            }
            break;

        case GET_STUDENT_INFO_AS_FB_USER:
            state = {
                ...state,
                loader: true,
            }
            break;

        case GET_STUDENT_INFO_AS_FB_USER_SUCCESS:
            state = {
                ...state,
                loader: false,
                studentAsUserFB: action.payload
            }
            break;

        case GET_QUIZ_INFO:
            state = {
                ...state,
                loader: true
            }
            break;

        case GET_QUIZ_INFO_SUCCESS:
            state = {
                ...state,
                loader: false,
                QuizID: action.payload
            }
            break;

        case ADD_QUIZ_INFO_IN_STUDENTS_RECORD:
            state = {
                ...state,
                loader: true
            }
            break;

        case ADD_QUIZ_INFO_IN_STUDENTS_RECORD_SUCCESS:
            state = {
                ...state,
                loader: false,
                studentQuizResult: action.payload
            }
            break;

        case SUBMIT_QUIZ_TO_TEACHER:
            state = {
                ...state,
                loader: true
            }
            break;

        case SUBMIT_QUIZ_TO_TEACHER_SUCCESS:
            state = {
                ...state,
                loader: false,
                studentQuizResult: null
            }
            break;
        /*******************************************************************************************/

        case QUIZ_DATA_FROM_REAL_TIME_DB:
            state = {
                ...state,
                loader: true,
            }
            break;

        case QUIZ_DATA_FROM_REAL_TIME_DB_SUCCESS:
            state = {
                ...state,
                Quiz: action.payload,
                loader: false,
            }
            break;

        default:
            break;
    }

    return state;
}