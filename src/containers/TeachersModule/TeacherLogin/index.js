import React from 'react';
import {
    Text,
    View
} from "react-native"
import Image from '../../../components/Image';
import { useState } from 'react';
import { styles } from './styles';
import { Colors, Icons, Images } from '../../../config';
import { showToast } from '../../../config';
import { NavigationService } from '../../../config';
import { emailRegex, passwordRegex } from '../../../config/util';
import { useDispatch, useSelector } from 'react-redux';
import { AppAction } from '../../../store/actions';
import { GoogleSocialButton } from 'react-native-social-buttons';
import { FacebookSocialButton } from 'react-native-social-buttons';
import TextField from '../../../components/FormInput/TextField';
import StandardButton from '../../../components/Button/StandardButton';
import { CustomText, PressableComponent } from '../../../components';


const TeacherLogin = () => {

    const [email, setEmail] = useState("");
    const [checkEmail, setCheckEmail] = useState(false);
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState(false);
    const [message, setMessage] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

    const dispatch = useDispatch();

    const handleBackButton = () => {
        NavigationService.navigate("Home");
    }

    const handleSignUpButton = () => {
        NavigationService.navigate("TeacherSignUp");
    }

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

    const handleLogin = async () => {
        try {
            if (email === "" || password === "") {
                showToast("error", "Email and password fields are empty");
            }
            else if (checkEmail == true && checkPassword == true) {
                showToast("error", "invalid credentials");
            }
            else {
                setEmail("");
                setPassword("");

                dispatch(AppAction.LoginTeacher({ userEmail: email, userPassword: password }));
            }
        }
        catch (err) {
            console.log(err);
            setMessage(err.message);
            setShowMessage(true);
        }
    }

    const googleSignin = async () => {
            dispatch(AppAction.GoogleLoginTeacher());
    }

    const facebookLogin = () => {
        dispatch(AppAction.FBLoginTeacher());
    }

    return (
        <View style={styles.myView}>

            <PressableComponent onPress={() => handleBackButton()} style={styles.backButton}>
                <Icons.AntDesign name="back" size={25} style={styles.backIcon} />
            </PressableComponent>

            <Image localImage={Images.quizTeacherLoginImage} imageStyle={styles.teacherImage}
                resizeMode={"contain"} />

            <CustomText.RegularText style={styles.iconText} text="Teacher's Account Login" />

            <TextField
                inputTextStyle={styles.inputEmailLabel} inputText="Email" inputFieldStyle={styles.inputEmailStyle}
                autoCapitalize="none" autoCorrect={false} placeholder="enter your email address"
                value={email} check={checkEmail} onChangeText={(e) => checkEmailFormat(e)}
                errorTextStyle={styles.redText} errorText="wrong Email format"
            />

            <TextField
                inputTextStyle={styles.inputPasswordLabel} inputText="Password" inputFieldStyle={styles.inputPasswordStyle}
                autoCapitalize="none" autoCorrect={false} placeholder="enter your password"
                value={password} secureTextEntry={true} onChangeText={(p) => checkPasswordFormat(p)}
                check={checkPassword} errorTextStyle={styles.redText}
                errorText="wrong password format (it should be of atleast 6 characters)"
            />

            <StandardButton onPress={() => handleLogin()} title="Login"
                buttonStyle={styles.loginButton} buttonTextStyle={styles.loginButtonText} />

            <StandardButton onPress={() => handleSignUpButton()} title="Sign Up"
                buttonStyle={styles.SignUpButton} buttonTextStyle={styles.SignUpButtonText} />

            <View style={styles.googleButtonView}>
                <GoogleSocialButton onPress={() => googleSignin()} />
            </View>

            <View style={styles.facebookButtonView}>
                <FacebookSocialButton onPress={() => facebookLogin()} />
            </View>

            {showMessage ? <Text style={{
                color: Colors.Danger, fontWeight: "900",
                marginTop: 10
            }}>{message}</Text> : <Text></Text>}

        </View>
    );
}

export default TeacherLogin;