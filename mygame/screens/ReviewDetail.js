import React from 'react'
import {StyleSheet,View,Text,Image} from 'react-native'
import Card from '../shared/Card'
import { globalStyles,images } from '../style/global'

export default function ReviewDetail({route}) {

    const rating = route.params.rating;

    return (
       <View style={styles.container}>
           <View>
               <Card>
                    <Text>{route.params.title}</Text>
                    <Text>{route.params.body}</Text>
                    <Image source={images.ratings[rating]} />
                </Card>
           </View>
       </View>
    )
}

const styles = StyleSheet.create({

    container:{
        alignContent:"center",
        justifyContent:"center",
        padding:10,
    },
    item:{
        alignItems:"center",
        marginTop:10,
        padding:10,
    }
})