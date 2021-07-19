import { API_URL } from "@/config/index";
import { LOGIN_SUCCESS } from "@/store/types/auth.types";
import axios from 'axios';

export const loginSpotify = (token) => async dispatch => {
    try {
        const result = await axios.post(`${API_URL}auth/login`, { code: token });
        window.history.pushState([], null, '/');
        if (result.data != null) {
            const data = {
                accessToken: result.data.data.accessToken,
                refreshToken: result.data.data.refreshToken,
                expiresIn: result.data.data.expiresIn
            };
            dispatch({ type: LOGIN_SUCCESS, payload: data });
        }
    } catch (error) {
        console.log(error);
    }
}