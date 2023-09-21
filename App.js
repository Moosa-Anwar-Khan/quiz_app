import React from 'react';
import { View, StatusBar} from "react-native"
import { Colors } from './src/config';
import Route from './src';
import { ToastComponent } from './src/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const App = () => {

  useEffect(() => {
    GoogleSignin.configure({
        webClientId:"551141387128-860cotcn67k6bkhfv0rij4jug66r2l5u.apps.googleusercontent.com"
      });
},[])

    const stack = createNativeStackNavigator();

    return (
  
      <View style={{ flex: 1, backgroundColor: Colors.Secondary }}>
        <StatusBar backgroundColor={Colors.Primary} barStyle="light-content" />
        {/* <Loader /> */}
        <Route />
        <ToastComponent />
      </View>
    )
  
}

export default App;