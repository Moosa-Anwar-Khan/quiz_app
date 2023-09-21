import { View, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import { Colors } from '../../../config'
import { CustomText, PressableComponent } from '../../../components'

const QuestionItem = ({ data, selectedOption }) => {

  const item = ({ item, index }) => {
    return (
      <PressableComponent onPress={() => selectedOption(index + 1)} style={[styles.option,
      { backgroundColor: data.marked == index + 1 ? Colors.Primary : Colors.LightOrange }]}>
        <View style={[styles.optionCircleView,
        { backgroundColor: data.marked == index + 1 ? Colors.Skygreen : Colors.White }]}>

          <CustomText.RegularText text={index == 0 ? 'A' : index == 1 ? 'B' : index == 2 ? 'C' : 'D'} 
          style={styles.optionLetter} />

        </View>

        <CustomText.RegularText text={item} style={[styles.optionText,
          { fontWeight: data.marked == index + 1 ? '900' : '600' }]} />

      </PressableComponent>
    );
  }

  return (
    <View style={styles.ListView}>

      <CustomText.RegularText text={data.question} style={styles.listText} />

      <View style={styles.optionsContainer}>
        <FlatList
          data={data.options}
          renderItem={item}
        />
      </View>

    </View>
  )
}

export default QuestionItem