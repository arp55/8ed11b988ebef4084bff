import { Dispatch } from "redux";
import { http } from "../../utils/http";
import * as types from './types'

const key='uNRLtNQRxeDJ1kdSbEF1OPaE5z7NqGslcOzEN3hT'

export const getAsteroid = (id:any,navigation:any) => (dispatch:Dispatch)=>{
    http.get(`${id}?api_key=${key}`)
    .then(res=>{
        // console.log(res.data)
        dispatch({
            type:types.SET_ASTEROID,
            payload:res.data
        })
        navigation.navigate("Asteroid")
    })
}

export const getRandom = (id?:any,navigation:any) => (dispatch:Dispatch)=>{
    http.get(`browse?api_key=${key}`)
    .then(res=>{
        // console.log(res.data.near_earth_objects)
        const astId=res.data.near_earth_objects[Math.floor(Math.random()*res.data.near_earth_objects.length)].id
        // console.log(astId)
        http.get(`${astId}?api_key=${key}`)
        .then(res=>{
            // console.log(res.data.nasa_jpl_url)
            dispatch({
                type:types.SET_ASTEROID,
                payload:res.data
            })
            navigation.navigate("Asteroid")
        })
    })
}
