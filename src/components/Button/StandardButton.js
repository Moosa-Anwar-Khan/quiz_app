import React from 'react';
import {
    Text,
    TouchableOpacity
} from "react-native"

const StandardButton = ({ onPress, title, buttonStyle, buttonTextStyle, onLongPress, disabled }) => {
    return (
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={buttonStyle} 
        disabled={disabled}>
            <Text style={buttonTextStyle}>{title}</Text>
        </TouchableOpacity>
    );
}

export default StandardButton;