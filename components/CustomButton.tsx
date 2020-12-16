import React from 'react'
import { Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Styles from '../styles/global'

function CustomButton({title,disabled,func,val,navigation,setVal}:any) {
    const dispatch = useDispatch()
    return (
        <View style={Styles.button}>
            <Button title={title} color="skyblue" disabled={disabled} onPress={()=>{dispatch(func(val,navigation));setVal('')}} />
        </View>
    )
}

export default CustomButton