import {createStore, combineReducers} from 'redux'
import { userReducer } from './userReducers'
import { postReducer } from './postReducers.js'

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
})

export const store = createStore(rootReducer)