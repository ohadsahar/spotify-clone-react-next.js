import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '@/config/index';

export default function useAuth(code) {

    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(async () => {
        try {
            const result = await axios.post(`${API_URL}auth/login`, { code: code });
            window.history.pushState([], null, '/');
            setAccessToken(result.data.data.accessToken);
            setRefreshToken(result.data.data.refreshToken);
            setExpiresIn(result.data.data.expiresIn);
        } catch (error) {
            window.location = '/';
        }
    }, [code]);

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                if (!refreshToken || !expiresIn) return;
                const result = await axios.post(`${API_URL}auth/refreshLogin`, { code: refreshToken });
                window.history.pushState([], null, '/');
                setAccessToken(result.data.data.accessToken);
                setExpiresIn(result.data.data.expiresIn);
            } catch (error) {
                window.location = '/';
            }
        }, (expiresIn - 60) * 1000);
        return () => clearInterval(interval);
    }, [refreshToken, expiresIn])
    return accessToken;
}


