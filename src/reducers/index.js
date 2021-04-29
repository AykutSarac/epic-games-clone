import { combineReducers } from 'redux'
import layoutReducer from './layoutReducer'

export default combineReducers({
    layout: layoutReducer
});