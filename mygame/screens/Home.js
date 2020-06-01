import React,{useState} from 'react'
import {StyleSheet,View,Text,Modal,FlatList,TouchableOpacity, Slider} from 'react-native'
import {global} from '../style/global'
import Card from '../shared/Card'
import {MaterialIcons} from '@expo/vector-icons'

import ReviewForrm from '../shared//ReviewForm'
import ReviewForm from '../shared//ReviewForm'

// import About from './About'
// import ReviewDetail from './ReviewDetail'

export default function Home({navigation}) {

    const [modelOpen,setModelOpen] = useState(false)

    const [reviews,setReviews] = useState([
        {'title':'man got madel','rating':'5','body':'good one','id':1},
        {'title':'on the road','rating':'4','body':'good one','id':2},
        {'title':'down the street','rating':'2','body':'good one','id':3},
        {'title':'up and down goal','rating':'5','body':'good one','id':4},
        {'title':'one can fly','rating':'3','body':'good one','id':5},
    ])

    const setReview = (review,actions) =>{
        setReviews(prevReview => [review,...prevReview])
        actions.resetForm()
        setModelOpen(false)
    }

    return (
       <View style={styles.review} >

        <Modal visible={modelOpen} animationType="slide">
            <View>
                <MaterialIcons 
                name="close"
                size={24}
                onPress={()=>setModelOpen(false)}
                />
            </View>
            <ReviewForm saveReview = {setReview}/>
        </Modal>

            <View style={styles.modal}>
                <MaterialIcons 
                    name="add"
                    size={24}
                    onPress={()=>setModelOpen(true)}
                />
            </View>

           <FlatList
           data={reviews}
           keyExtractor={(item)=>item.id.toLocaleString()}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetail',item)}>
                    <Card>
                    <Text>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}
           />
       </View>
    )
}

const styles = StyleSheet.create({

    review:{
        padding:10,
    },

    item:{
        alignItems:"center",
        marginTop:10,
        padding:10,
        borderColor:'#bbb',
        borderWidth:1,
        borderRadius:10,
        borderStyle:'dashed'
    },
    modal:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:20,
    }
    
})