import React from 'react';
import {
    Text,
    TouchableOpacity, View, TextInput
} from "react-native";

const TextField = ({ inputText, inputTextStyle, inputFieldStyle, autoCapitalize, autoCorrect,
    placeholder, value, secureTextEntry, onChangeText, check, errorText, errorTextStyle, altText,
    TextStyle, multiline }) => {
    return (
        <View>
            <Text style={inputTextStyle}>{inputText}</Text>
            <TextInput style={inputFieldStyle} autoCapitalize={autoCapitalize} autoCorrect={autoCorrect}
                placeholder={placeholder} value={value} secureTextEntry={secureTextEntry} 
                onChangeText={onChangeText} multiline={multiline}
            />
            {check 
            ?  <Text style={errorTextStyle}>{errorText}</Text> 
            : <Text style={TextStyle}>{altText}</Text>}
        </View>
    );
}

export default TextField;