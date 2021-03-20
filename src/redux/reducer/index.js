import { combineReducers } from 'redux';
import { registerReducer, photoReducer } from './auth';
import { globalReducer, URL_API } from './global';


const reducer = combineReducers({
    registerReducer,
    globalReducer,
    URL_API,
    photoReducer
});

export default reducer;