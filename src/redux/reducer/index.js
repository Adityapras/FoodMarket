import { combineReducers } from 'redux';
import { registerReducer, photoReducer } from './auth';
import { globalReducer, URL_API } from './global';
import { homeReducer } from './home';
import { orderReducer } from './order';

const reducer = combineReducers({
    registerReducer,
    globalReducer,
    URL_API,
    photoReducer,
    homeReducer,
    orderReducer
});

export default reducer;