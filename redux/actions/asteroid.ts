import { Alert } from "react-native";
import { Dispatch } from "redux";
import { http } from "../../utils/http";
import * as types from './types'

const key='uNRLtNQRxeDJ1kdSbEF1OPaE5z7NqGslcOzEN3hT'

export const getAsteroid = (id:any,navigation:any) => (dispatch:Dispatch)=>{
    http.get(`${id}?api_key=${key}`)
    .then(res=>{
        dispatch({
            type:types.SET_ASTEROID,
            payload:res.data
        })
        navigation.navigate("Asteroid")
    })
    .catch(err=>{
        Alert.alert("Invalid Asteroid ID","You have entered invalid asteroid id!!")
    })
}

export const getRandom = (id:any,navigation:any) => (dispatch:Dispatch)=>{
    http.get(`browse?api_key=${key}`)
    .then(res=>{
        const astId=res.data.near_earth_objects[Math.floor(Math.random()*res.data.near_earth_objects.length)].id
        // console.log(astId)
        http.get(`${astId}?api_key=${key}`)
        .then(res=>{
            dispatch({
                type:types.SET_ASTEROID,
                payload:res.data
            })
            navigation.navigate("Asteroid")
        })
        .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
}
