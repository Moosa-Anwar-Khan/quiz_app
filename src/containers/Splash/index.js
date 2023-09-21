import React from 'react';
import { Text, View, Image } from "react-native"
import { useEffect } from 'react';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icons, Images, NavigationService } from '../../config';
import { CustomText } from '../../components';


const Splash = () => {

    useEffect(() => {
        setTimeout(() => {
            checkUserStatus();
        }, 2000);

        return () => { }
    }, []);

    const checkUserStatus = async () => {
        let studentAsUser = await AsyncStorage.getItem("student_as_user");
        let teacherAsUser = await AsyncStorage.getItem("teacher_as_user");

        if(studentAsUser !== null) {
            studentAsUser = JSON.parse(studentAsUser);
        }

        if(teacherAsUser !== null) {
            teacherAsUser = JSON.parse(teacherAsUser);
        }

        var routeName;

        // const routeName = currentUser !== null ? "Todo" : "Login";

        if (studentAsUser !== null) {
            routeName = "StudentHomeScreen";
        }

        else if (teacherAsUser !== null) {
            routeName = "TeacherHomeScreen";
        }

        else {
            routeName = "Home"
        }

        NavigationService.replace(routeName);
    }

    return (
        <View style={styles.myView}>
            <Image source={Images.quizImageSplash} style={styles.quizIcon} />
            <CustomText.RegularText style={styles.myText} text="KNOWLEDGE IS POWER" />
        </View>
    );
}

export default Splash;