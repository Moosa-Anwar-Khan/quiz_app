import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { Colors } from '../../config';
import styles from './styles';

const Loader = () => {
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#f4511e" />
    </View>
}

export default Loader;