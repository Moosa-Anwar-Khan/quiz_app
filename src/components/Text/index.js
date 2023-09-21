import { Text } from 'react-native'
import React from 'react'

import { Fonts, Metrix, Colors }from '../../config'

function RegularText({
    fontFamily = Fonts['Montserrat-Regular'],
    fontSize = 14,
    color = Colors.Primary,
    textAlign = 'left',
    textDecorationLine = 'none',
    // textDecorationColor = Colors.Primary,
    textDecorationStyle = 'solid',
    text,
    style,
    ellipsizeMode = "tail",
    numberOfLines = 5,
}) {
    return (
        <Text
            style={[{
                fontFamily,
                fontSize: Metrix.customFontSize(fontSize),
                color,
                textAlign,
                textDecorationLine,
                // textDecorationColor,
                textDecorationStyle,
            }, style]}
            numberOfLines={numberOfLines}
            ellipsizeMode={ellipsizeMode}
        >
            {text}
        </Text>
    )
}


function BoldText({
    fontFamily = Fonts['Montserrat-Bold'],
    fontSize = 14,
    color = Colors.Primary,
    textAlign = 'center',
    textDecorationLine = 'none',
    // textDecorationColor = Colors.Primary,
    textDecorationStyle = 'solid',
    text,
    style,
    ellipsizeMode = "tail",
    numberOfLines = 5,
}) {
    return (
        <Text
            style={[{
                fontFamily,
                fontSize: Metrix.customFontSize(fontSize),
                color,
                textAlign,
                textDecorationLine,
                // textDecorationColor,
                textDecorationStyle,
            }, style]}
            numberOfLines={numberOfLines}
            ellipsizeMode={ellipsizeMode}
        >
            {text}
        </Text>
    )
}

function DarkText({
    fontFamily = Fonts['Poppins-Black'],
    fontSize = 1.5,
    color = Colors.Primary,
    textAlign = 'center',
    textDecorationLine = 'none',
    textDecorationColor = Colors.Primary,
    textDecorationStyle = 'solid',
    children,
    style
}) {
    return (
        <Text
            style={[{
                fontFamily,
                fontSize: Metrix.customFontSize(fontSize),
                color,
                textAlign,
                textDecorationLine,
                textDecorationColor,
                textDecorationStyle,
            }, style]}
        >
            {children}
        </Text>
    )
}

function TextWithSpan({
    fontFamily = Fonts['Montserrat-Bold'],
    fontSize = 14,
    color = Colors.Primary,
    textAlign = 'left',
    textDecorationLine = 'none',
    // textDecorationColor = Colors.Primary,
    textDecorationStyle = 'solid',
    text,
    spanText,
    style,
    spanTextStyle,
    ellipsizeMode = "tail",
    numberOfLines = 5,
}) {
    return (
        <Text
            style={[{
                fontFamily,
                fontSize: Metrix.customFontSize(fontSize),
                color,
                textAlign,
                textDecorationLine,
                // textDecorationColor,
                textDecorationStyle,
            }, style]}
            numberOfLines={numberOfLines}
            ellipsizeMode={ellipsizeMode}
        >
            {text}<Text style={[{
                fontFamily,
                fontSize: Metrix.customFontSize(fontSize),
                textAlign,
                textDecorationLine,
                // textDecorationColor,
                textDecorationStyle,
            }, spanTextStyle]}
            numberOfLines={numberOfLines}
            ellipsizeMode={ellipsizeMode}>{spanText}</Text>
        </Text>
    )
}


export default { RegularText, DarkText, BoldText, TextWithSpan }
