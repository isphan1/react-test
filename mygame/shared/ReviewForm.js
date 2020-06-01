import React from 'react';
import { StyleSheet, Button, TextInput, View, Text,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { globalStyles } from '../style/global';
import { Formik } from 'formik';
import * as Yup from 'yup'

export default function ReviewForm({saveReview}) {

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values,actions) => {
          console.log(values);
          let id = Math.random() + 1
          saveReview({'title':values.title,'body':values.body,'rating':values.rating,'id':id},actions)
        }}

        validationSchema={Yup.object({
            title:Yup.string().required().min(4),
            body:Yup.string().required().min(8),
            rating:Yup.string().required()
            .test('is-num-1-5','rating between 1 to 5',(val) =>{
                return parseInt(val) < 6 && parseInt(val) > 0;
            })
        })}

      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={globalStyles.textError}>{props.touched.title && props.errors.title ? props.errors.title : ''}</Text>   
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Review details'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}

            />
            <Text style={globalStyles.textError}>{props.touched.body && props.errors.body ? props.errors.body : ''}</Text>   

            <TextInput 
              style={globalStyles.input}
              placeholder='Rating (1 - 5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
              onBlur={props.handleBlur('rating')}
            />
            <Text style={globalStyles.textError}>{props.touched.rating && props.errors.rating ? props.errors.rating : ''}</Text>   
            
            <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
    </TouchableWithoutFeedback>
  );
}