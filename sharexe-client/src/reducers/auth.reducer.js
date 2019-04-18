import * as actionTypes from '../constants/actionTypes';
import { loadUserData } from '../utils/localStorage';

const userData = loadUserData();

const initialState = {
    isAuthenticated: Boolean(userData),
    user: userData
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_USER_SUCCESSFUL:
            return { ...state, isAuthenticated: true, ...action.payload };

        case actionTypes.LOGIN_USER_FAILED:
            return { ...state, isAuthenticated: false, user: {} };
        
        case actionTypes.LOGOUT_USER:
            return { ...state, isAuthenticated: false, user: undefined };
        
        default:
            return initialState;
    }
}