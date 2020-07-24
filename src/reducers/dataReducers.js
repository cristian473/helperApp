import React from 'react'
import data from '../info.json'
import {GET_DATA_CARDS} from '../constans/constans'
const initialState = []

export const getDataReducer = (state=initialState, actions) =>{
    if(actions.type === GET_DATA_CARDS){
        
    return actions.payload
    }

  return state
}