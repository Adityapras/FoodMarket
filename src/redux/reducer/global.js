const initGlobalState = {
    isError: false,
    message: 'Error',
    isLoading: false
};

export const globalReducer = (state = initGlobalState, action) => {
    if (action.type === 'SET_ERROR') {
        return {
            ...state,
            isError: action.value.isError,
            message: action.value.message,
        }
    }

    if (action.type === 'SET_LOADING') {
        return {
            ...state,
            isLoading: action.value,
        }
    }
    return state;
};

const urlapi = 'http://10.0.2.2:80/food-market-backend/public/api';

export const URL_API = () => {
    return urlapi;
}
