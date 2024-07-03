import {createStore, combineReducers} from 'redux'
import { userReducer } from './userReducers'
import { projectReducer } from './projectReducers'

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
})

export const store = createStore(rootReducer)