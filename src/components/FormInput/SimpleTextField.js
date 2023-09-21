import React from 'react';
import {
    Text,
    TouchableOpacity, View, TextInput
} from "react-native";

const SimpleTextField = ({inputFieldStyle, autoCapitalize, autoCorrect, placeholder, value, secureTextEntry, 
    onChangeText,multiline }) => {
    return (
            <TextInput style={inputFieldStyle} autoCapitalize={autoCapitalize} autoCorrect={autoCorrect}
                placeholder={placeholder} value={value} secureTextEntry={secureTextEntry} 
                onChangeText={onChangeText} multiline={multiline}
            />
    );
}

export default SimpleTextField;