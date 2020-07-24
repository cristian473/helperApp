import {combineReducers} from 'redux'
import {getDataReducer} from './dataReducers'

export const reducers = combineReducers({

    helpers:getDataReducer


})