import { View } from 'react-native'
import Image from '../../../components/Image';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Colors, Images, NavigationService } from '../../../config';
import { Icons } from '../../../config';
import StudentMenuModal from '../../../components/Modal/studentMenuModal';
import { useDispatch, useSelector } from 'react-redux';
import { AppAction } from '../../../store/actions';
import { ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import { CustomText, PressableComponent } from '../../../components';

const StudentHomeScreen = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();

  const current_user = useSelector(state => state.AppReducer.studentInfoFromFS);
  const Loader = useSelector(state => state.AppReducer.loader);

  useEffect(() => {
    // getUserFromFS();
    dispatch(AppAction.GetStudentFromFs());
  }, [current_user == null]);

  const searchQuizButton = () => {
    NavigationService.navigate("SearchQuizPage");
  }

  const handleLogout = () => {
    dispatch(AppAction.LogoutStudent());
  }

  const handleViewHistoryButton = async () => {
    NavigationService.navigate("ViewHistory");
  }


  return (

    <View style={styles.container}>
      {Loader ? <ActivityIndicator size="large" color={Colors.LoaderColor} /> :

        <View>

          {auth().currentUser?.displayName ?

            <StudentMenuModal animationType="slide" visible={modalVisible}
              onRequestClose={() => setModalVisible(false)} myModalContainer={styles.myModal}
              userIconStyle={styles.modalUserIcon} usernameText={styles.usernameTxt} username={auth().currentUser.displayName}
              emailText={styles.emailTxt} email={auth().currentUser.email} logoutButtonStyle={styles.logOutButton}
              logoutButtonOnPress={() => handleLogout()} logoutButtonText={styles.logOutButtonText}
              settingsButtonStyle={styles.settingsButton} settingsButtonText={styles.settingsButtonText}
              backModalButtonStyle={styles.backModalButton} backModalButtonOnPress={() => setModalVisible(false)} /> :

            <StudentMenuModal animationType="slide" visible={modalVisible}
              onRequestClose={() => setModalVisible(false)} myModalContainer={styles.myModal}
              userIconStyle={styles.modalUserIcon} usernameText={styles.usernameTxt} username={current_user?._data.name}
              emailText={styles.emailTxt} email={current_user?._data.email} logoutButtonStyle={styles.logOutButton}
              logoutButtonOnPress={() => handleLogout()} logoutButtonText={styles.logOutButtonText}
              settingsButtonStyle={styles.settingsButton} settingsButtonText={styles.settingsButtonText}
              backModalButtonStyle={styles.backModalButton} backModalButtonOnPress={() => setModalVisible(false)} />

          }

          <View style={styles.optionsBar}>
            <Icons.Entypo name="menu" onPress={() => setModalVisible(true)} size={40} style={styles.menuIcon} />
            <Icons.FontAwesome name="user-circle" size={60} style={styles.userIcon} />
            <Icons.AntDesign name="home" size={40} style={styles.homeIcon} />
          </View>

          <Image localImage={Images.studentHomeImage} imageStyle={styles.studentHomeImage}
            resizeMode={"contain"} />

          <PressableComponent style={styles.searchQuizButton} onPress={() => searchQuizButton()}>
            <CustomText.RegularText text="Search for quiz" style={styles.searchQuizButtonText} />
            <Icons.MaterialIcons name="search" size={40} style={styles.searchQuizIcon} />
          </PressableComponent>

          <PressableComponent style={styles.viewHistoryButton} onPress={() => handleViewHistoryButton()}>
            <CustomText.RegularText text="View history" style={styles.viewHistoryButtonText} />
            <Icons.MaterialIcons name="history" size={40} style={styles.viewHistoryIcon} />
          </PressableComponent>
        </View>

      }
    </View>

  )
}

export default StudentHomeScreen;