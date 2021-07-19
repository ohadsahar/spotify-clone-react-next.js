import { LOGIN_SUCCESS, LOGIN_FAILED } from "@/store/actions/auth.actions";

const initialState = {
    accessToken: '',
    refreshToken: '',
    expiresIn: 0
}

export const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'LOGIN_SUCCESS':
            return { ...state, accessToken: payload.accessToken, refreshToken: payload.refreshToken, expiresIn: payload.expiresIn };
        case LOGIN_FAILED:
            return { accessToken: null }
        default:
            return state;
    }
}