import { View, Text, TouchableOpacity,} from 'react-native'
import React from 'react'
import { Icons, Images } from '../../config'
import Image from '../../components/Image'
import styles from './styles'
import { NavigationService } from '../../config'
import { CustomText, PressableComponent } from '../../components'

const Home = () => {

  const handleStudentAccountButton = () => {
    NavigationService.navigate("StudentLogin");
  }

  const handleTeacherAccountButton = () => {
    NavigationService.navigate("TeacherLogin");
  }

  return (
    <View style={styles.container}>

      <CustomText.RegularText text="Quiz App" style={styles.headerText} />

      <Image localImage={Images.quizAppIcon} imageStyle={styles.quizAppIcon}
        resizeMode={"contain"} />

      <PressableComponent style={styles.studentButton} onPress={() => handleStudentAccountButton()}>
        <CustomText.RegularText text="Student" style={styles.studentButtonText} />
        <Icons.FontAwesome name="users" size={30} style={styles.studentIcon} />
      </PressableComponent>

      <PressableComponent style={styles.teacherButton} onPress={() => handleTeacherAccountButton()}>
        <CustomText.RegularText text="Teacher" style={styles.teacherButtonText} />
        <Icons.FontAwesome5 name="chalkboard-teacher" size={30} style={styles.teacherIcon} />
      </PressableComponent>
    </View>
  )
}

export default Home;