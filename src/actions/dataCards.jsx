import React from 'react'
import {useDispatch} from 'react-redux'
import data from '../info.json'
import {GET_DATA_CARDS} from '../constans/constans'
import Axios from 'axios'

export function getData (){
    

    return (dispatch)=>{dispatch({type: GET_DATA_CARDS, payload: data})}

}

export function getImages () {
    return (dispatch)=>{
    Axios.get('https://source.unsplash.com/random/800x600')
        .then(response=>{
            console.log(response.data)
        })
    }

}