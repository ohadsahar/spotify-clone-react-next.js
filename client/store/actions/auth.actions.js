import { API_URL } from "@/config/index";
import { LOGIN_SUCCESS, UPDATE_LOGIN } from "@/store/types/auth.types";
import axios from 'axios';

export const loginSpotify = (token) => async dispatch => {
    const result = await axios.post(`${API_URL}auth/login`, { code: token });
    if (result.data != null) {
        localStorage.setItem('refreshToken', result.data.data.refreshToken);
        const data = {
            accessToken: result.data.data.accessToken,
            refreshToken: result.data.data.refreshToken,
            expiresIn: result.data.data.expiresIn
        };
        dispatch({ type: LOGIN_SUCCESS, payload: data });
    }
}

export const refreshLogin = (refreshToken) => async dispatch => {
    const result = await axios.post(`${API_URL}auth/refreshLogin`, { code: refreshToken });
    const data = {
        accessToken: result.data.data.accessToken,
        expiresIn: result.data.data.expiresIn
    }
    dispatch({ type: UPDATE_LOGIN, payload: data });
}