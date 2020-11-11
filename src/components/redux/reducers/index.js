import { combineReducers } from 'redux';
import userReducer from './userreducer';
import appinforeducer from './appinforeducer';
import productreducer from "./productreducer"
import catreducer from "./catreducer";
import brandreducer from "./brandreducer";
import cartreducer from "./cartreducer";
import sizereducer from "./sizereducer";
import invoreducer from "./invoreducer";
import pincodereducer from "./pincodereducer"
import getallreducer from "./getallreducer"
import teacherreducer from "./teacherreducer"
const rootReducer = combineReducers({
    userReducer,
    appinforeducer,
    productreducer,
    catreducer,
    cartreducer,
    brandreducer,
    sizereducer,
    invoreducer,
    pincodereducer,
    getallreducer,
    teacherreducer
    
})

export default rootReducer