import React,{useState} from 'react';
import * as Font from 'expo-font'
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo'
import Home from './screens/Home';
import drawerNavigator from './routes/Drawer'

const getFonts = () => Font.loadAsync({
  "nunito-regular":require('./assets/fonts/Nunito-Regular.ttf'),
  "nunito-bold":require('./assets/fonts/Nunito-Bold.ttf'),

})

export default function App() {
    const [fontLoaded,setFontsLoaded] = useState(false)

    if(fontLoaded){
      return (
        drawerNavigator()
      )
    }
    else{
      return (
      <AppLoading 
      startAsync = {getFonts}
      onFinish = {() => setFontsLoaded(true)}
      />
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
