import { View, TextInput } from 'react-native'
import Image from '../../../components/Image';
import React, { useState } from 'react'
import { Colors, Icons, Images } from '../../../config';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppAction } from '../../../store/actions';
import { ActivityIndicator } from 'react-native';
import { CustomText, PressableComponent } from '../../../components';

const SearchQuizPage = () => {

    const [quizId, setQuizId] = useState(null);

    const dispatch = useDispatch();

    const Loader = useSelector(state => state.AppReducer.loader);

    const handleSearchButton = () => {
        dispatch(AppAction.GetQuizInfo({ quizID: quizId }));
    }

    return (

        <View style={styles.container}>
            {Loader ? <ActivityIndicator size="large" color={Colors.LoaderColor} /> :

                <View style={styles.container1}>
                    <Image localImage={Images.findQuizIcon} imageStyle={styles.findQuizImage}
                        resizeMode={"contain"} />
                    {/* <Text style={styles.inputQuizIdStyleLabel}>Enter quiz ID</Text> */}
                    <CustomText.RegularText style={styles.inputQuizIdStyleLabel} text="Enter quiz ID" />
                    <TextInput style={styles.inputQuizIdStyle} autoCapitalize="none" autoCorrect={false}
                        placeholder="Quiz ID..." value={quizId} onChangeText={(d) => setQuizId(d)}
                    />
                    <PressableComponent style={styles.searchButton} onPress={() => handleSearchButton()}>
                        <Icons.FontAwesome size={30} name="search" style={styles.searchIcon} />
                    </PressableComponent>
                </View>

            }
        </View>
    )
}

export default SearchQuizPage;