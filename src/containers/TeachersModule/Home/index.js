import { View} from 'react-native'
import Image from '../../../components/Image';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Colors, Images, NavigationService } from '../../../config';
import { Icons } from '../../../config';
import TeacherMenuModal from '../../../components/Modal/teacherMenuModal';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { AppAction } from '../../../store/actions';
import { ActivityIndicator } from 'react-native';
import { CustomText, PressableComponent } from '../../../components';

const TeacherHomeScreen = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  const current_user = useSelector(state => state.AppReducer.teacherInfoFromFS);
  const Loader = useSelector(state => state.AppReducer.loader);

  useEffect(() => {
    dispatch(AppAction.GetTeacherFromFs());
  }, [current_user == null]);


  const prepareQuizButton = () => {
    NavigationService.navigate("MakeAQuiz");
  }

  const handleViewPreviousButton = () => {
    NavigationService.navigate("ViewPreviousQuizes");
  }

  const handleViewMarksButton = () => {
    NavigationService.navigate("ViewStudentsMarks");
  }

  const handleLogout = async () => {
    dispatch(AppAction.LogoutTeacher());
  }

  return (

    <View style={styles.container}>
      {Loader ? <ActivityIndicator size="large" color={Colors.LoaderColor} /> :

        <View>

            {auth().currentUser?.displayName ? 
          
          <TeacherMenuModal animationType="slide" visible={modalVisible}
            onRequestClose={() => setModalVisible(false)} myModalContainer={styles.myModal}
            userIconStyle={styles.modalUserIcon} usernameText={styles.usernameTxt} username={auth().currentUser.displayName} emailText={styles.emailTxt}
            email={auth().currentUser.email} logoutButtonStyle={styles.logOutButton}
            logoutButtonOnPress={() => handleLogout()} logoutButtonText={styles.logOutButtonText}
            settingsButtonStyle={styles.settingsButton} settingsButtonText={styles.settingsButtonText}
            backModalButtonStyle={styles.backModalButton} backModalButtonOnPress={() => setModalVisible(false)} /> : 

            <TeacherMenuModal animationType="slide" visible={modalVisible}
            onRequestClose={() => setModalVisible(false)} myModalContainer={styles.myModal}
            userIconStyle={styles.modalUserIcon} usernameText={styles.usernameTxt} username={current_user?._data.name} emailText={styles.emailTxt}
            email={current_user?._data.email} logoutButtonStyle={styles.logOutButton}
            logoutButtonOnPress={() => handleLogout()} logoutButtonText={styles.logOutButtonText}
            settingsButtonStyle={styles.settingsButton} settingsButtonText={styles.settingsButtonText}
            backModalButtonStyle={styles.backModalButton} backModalButtonOnPress={() => setModalVisible(false)} />
          }

          <View style={styles.optionsBar}>
            <Icons.Entypo name="menu" onPress={() => setModalVisible(true)} size={40} style={styles.menuIcon} />
            <Icons.FontAwesome name="user-circle" size={60} style={styles.userIcon} />
            <Icons.AntDesign name="home" size={40} style={styles.homeIcon} />
          </View>

          <Image localImage={Images.teacherHomeImage} imageStyle={styles.teacherIcon} resizeMode={"contain"} />

          <PressableComponent style={styles.prepareQuizButton} onPress={() => prepareQuizButton()}>
            <CustomText.RegularText style={styles.prepareQuizButtonText} text="Prepare a quiz" />
            <Icons.MaterialIcons name="question-answer" size={40} style={styles.prepareQuizIcon} />
          </PressableComponent>

          <View style={styles.buttonsView}>

            <PressableComponent style={styles.viewPreviousButton} onPress={() => handleViewPreviousButton()}>
              <CustomText.RegularText style={styles.viewPreviousButtonText} text="View previous quizes" />
              <Icons.MaterialIcons name="history" size={40} style={styles.viewPreviousIcon} />
            </PressableComponent>

            <PressableComponent style={styles.viewMarksButton} onPress={() => handleViewMarksButton()}>
              <CustomText.RegularText style={styles.viewMarksButtonText} text="View marks" />
              <Icons.FontAwesome5 name="clipboard-list" size={40} style={styles.viewMarksIcon} />
            </PressableComponent>

          </View>

        </View>

      }
    </View>

  )
}

export default TeacherHomeScreen