import { combineReducers } from 'redux';
import { registerReducer, photoReducer } from './auth';
import { globalReducer, URL_API } from './global';
import { homeReducer } from './home';

const reducer = combineReducers({
    registerReducer,
    globalReducer,
    URL_API,
    photoReducer,
    homeReducer
});

export default reducer;