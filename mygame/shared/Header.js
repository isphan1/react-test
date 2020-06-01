import React from 'react'
import {StyleSheet,View,Text,Image,ImageBackground} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons'
export default function Header({title}) {

    const navigation = useNavigation()

    return (
        // <ImageBackground style={styles.bg} source={require('../assets/game_bg.png')}>
        <View style={styles.header}>
            <MaterialIcons name="menu" onPress={()=>navigation.openDrawer()} style={styles.icon}/>
            <View style={styles.headerText}>
                <Image style={styles.logo} source={require('../assets/heart_logo.png')} />
                <Text style={{textAlign:"center",fontSize:20}}>{title}</Text>
            </View>
        </View>
        // </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        width:'100%',
        height:70,
    },
    headerText:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:"100%"

    },
    icon:{
        fontSize:25,
    },
    logo:{
        width:20,
        height:20,
        marginRight:10
    },
    bg:{
        width:'100%',
    }
})