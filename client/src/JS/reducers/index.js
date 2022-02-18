import {combineReducers} from "redux"
import {userReducer}from "./user"
import {Cartreducer}from "./Cart"
export const rootReducer=combineReducers({userReducer,Cartreducer});


