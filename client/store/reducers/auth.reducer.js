import { LOGIN_SUCCESS, LOGIN_FAILED, UPDATE_LOGIN, DISCONNECT } from "@/store/types/auth.types";

const initialState = {
    accessToken: null,
    refreshToken: null,
    expiresIn: 0
}

export const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return { ...state, accessToken: payload.accessToken, refreshToken: payload.refreshToken, expiresIn: payload.expiresIn };
        case UPDATE_LOGIN:
            return { ...state, accessToken: payload.accessToken, expiresIn: payload.expiresIn };
        case LOGIN_FAILED:
            return { accessToken: null };
        case DISCONNECT:
            return { ...state, accessToken: null, refreshToken: null, expiresIn: 0 };
        default:
            return state;
    }
}