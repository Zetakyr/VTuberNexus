import { combineReducers } from 'redux';

const userInfo = (state = {}, action) => {
    if (action?.type === 'login') {
        return action.payload;
    }
    if (action?.type === 'logout') {
        return action.payload;
    }
    return state;
}

export default combineReducers({
    userInfo
});