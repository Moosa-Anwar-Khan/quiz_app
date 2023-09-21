import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import { useRoute } from '@react-navigation/native'
import { CustomText } from '../../../components'

const AddedQuestionItem = () => {
  const route = useRoute();
  const { addedQuestions,nameOfQuiz } = route.params;
  const myQuestions = JSON.parse(addedQuestions);

  const item = ({ item, index }) => {

    const optionsItem = ({item,index}) => {
      return (
        <CustomText.TextWithSpan style={styles.option} text={`${index+1}. `} spanTextStyle={styles.optionSpan} 
        spanText={item} />
      );
    }

    return (
      <View style={styles.addedQuestionsView}>
        
        <CustomText.RegularText style={styles.questionHeader} text={`Question ${index+1}`} />
        
        <CustomText.TextWithSpan style={styles.questionStatement} text="Question: " 
        spanTextStyle={styles.questionStatementSpan} spanText={item.question} />
        
        <CustomText.RegularText style={styles.optionsHeader} text="Options:" />

        <FlatList data={item.options} renderItem={optionsItem} style={styles.optionsFlatlist} />
        
        <CustomText.TextWithSpan style={styles.correctOption} text="correct option: " 
        spanTextStyle={styles.correctOptionSpan} spanText={item.options[item.correct]} />
        
      </View>
    );
  }

  return (

    <View style={styles.ListView}>
        <Text style={styles.nameOfQuizText}>{nameOfQuiz}</Text>
        <FlatList
          data={myQuestions}
          renderItem={item} 
          style={{height:"90%",}}
        />
    </View>
  )
}

export default AddedQuestionItem