import React from 'react';
import {
    Text,
    View
} from "react-native"
import Image from '../../../components/Image';
import { useState } from 'react';
import { styles } from './styles';
import { emailRegex, passwordRegex } from '../../../config/util';
import { Colors, Images, showToast } from '../../../config';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { AppAction } from '../../../store/actions';
import TextField from '../../../components/FormInput/TextField';
import StandardButton from '../../../components/Button/StandardButton';
import { CustomText } from '../../../components';

const TeacherSignUp = () => {

    const [email, setEmail] = useState("");
    const [checkEmail, setCheckEmail] = useState(false);
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState(false);
    const [name, setName] = useState("");
    const [message, setMessage] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

    const dispatch = useDispatch();

    const Loader = useSelector(state => state.AppReducer.loader);

    const checkEmailFormat = (text) => {
        setEmail(text);
        if (emailRegex.test(text)) {
            setCheckEmail(false);
        }
        else {
            setCheckEmail(true);
        }
    }

    const checkPasswordFormat = (pass) => {
        setPassword(pass);
        if (passwordRegex.test(pass)) {
            setCheckPassword(false);
        }
        else {
            setCheckPassword(true);
        }
    }

    const handleSignup = async () => {
        try {
            if (email === "" || password === "" || name === "") {
                showToast("error", "No field should be left empty");
            }
            else {
                const response = await auth().createUserWithEmailAndPassword(email, password);

                const userData = {
                    id: response.user.uid,
                    name: name,
                    email: email,
                    category: "teacher"
                }

                setShowMessage("");
                setName("");
                setEmail("");
                setPassword("");

                dispatch(AppAction.SignupTeacher({ user_data: userData }));

            }

        } catch (err) {
            console.log(err);
            setMessage(err.message);
            setShowMessage(true);
        }
    }

    return (

        <View style={styles.myView}>
            
            <Image localImage={Images.quizTeacherLoginImage} imageStyle={styles.teacherImage}
                resizeMode={"contain"} />
            
            <CustomText.RegularText style={styles.iconText} text="Sign up as a teacher" />

            <TextField inputTextStyle={styles.inputUsernameLabel} inputText="Name"
                inputFieldStyle={styles.inputUsernameStyle} autoCapitalize="none" autoCorrect={false}
                placeholder="enter your name" value={name} onChangeText={(n) => setName(n)} />

            <TextField
                inputTextStyle={styles.inputEmailLabel} inputText="Email"
                inputFieldStyle={styles.inputEmailStyle} autoCapitalize="none" autoCorrect={false}
                placeholder="enter your email address" value={email} check={checkEmail}
                onChangeText={(e) => checkEmailFormat(e)} errorTextStyle={styles.redText}
                errorText="wrong Email format"
            />

            <TextField
                inputTextStyle={styles.inputPasswordLabel} inputText="Password"
                inputFieldStyle={styles.inputPasswordStyle} autoCapitalize="none" autoCorrect={false}
                placeholder="enter your password" value={password} secureTextEntry={true}
                onChangeText={(p) => checkPasswordFormat(p)} check={checkPassword} errorTextStyle={styles.redText}
                errorText="wrong password format (it should be of atleast 6 characters)"
            />

            <StandardButton onPress={() => handleSignup()} title="Sign up"
                buttonStyle={styles.SignUpButton} buttonTextStyle={styles.SignUpButtonText} />


            {showMessage ? <Text style={{
                color: Colors.Danger, fontWeight: "900",
                marginTop: 10
            }}>{message}</Text> : <Text></Text>}

        </View>

    );

}

export default TeacherSignUp;