import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Modal } from 'react-native'
import { Icons } from '../../config'

const TeacherMenuModal = ({ animationType, visible, onRequestClose, myModalContainer, userIconStyle, usernameText,
    username,emailText,email, logoutButtonStyle, logoutButtonOnPress, logoutButtonText, settingsButtonStyle, settingsButtonOnPress,
    settingsButtonText, backModalButtonStyle, backModalButtonOnPress, loggingOutText }) => {
    return (
        <View>

            <Modal
                animationType={animationType}
                visible={visible}
                onRequestClose={onRequestClose}>

                <View style={myModalContainer}>
                    <Icons.FontAwesome name="user" style={userIconStyle} size={150} color="#203169" />

                    <Text style={usernameText}>{username}</Text>

                    <Text style={emailText}>{email}</Text>

                    <TouchableOpacity style={logoutButtonStyle} onPress={logoutButtonOnPress}>
                        <Text style={logoutButtonText}>Logout   <Icons.Entypo name="log-out"
                            size={20} color="#ffffff" /></Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={settingsButtonStyle}>
                        <Text style={settingsButtonText}>Settings   <Icons.Ionicons name="settings"
                            size={20} color="#ffffff" /></Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={backModalButtonStyle}
                        onPress={backModalButtonOnPress}><Icons.AntDesign name="downcircle"
                            size={30} color="#203169" /></TouchableOpacity>

                </View>

            </Modal>

        </View>
    )
}

export default TeacherMenuModal