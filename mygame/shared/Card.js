import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

export default function Card(props) {
    return (
      <View style={styles.card}>
          <View style={styles.cardContent}>
            {props.children}
          </View>
      </View>
    )
}


const styles = StyleSheet.create({

card:{
    borderRadius:6,
    backgroundColor:"#fff",
    shadowOffset:{width:1,height:1},
    shadowColor:'#333',
    shadowOpacity:.3,
    shadowRadius:3,
    marginVertical:10,
    marginHorizontal:10

},

cardContent:{
    marginVertical:16,
    marginHorizontal:16
}

})
