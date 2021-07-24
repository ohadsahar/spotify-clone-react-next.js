import { refreshLogin } from '@/store/actions/auth.actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useAuth() {

    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.auth.accessToken);

    useEffect(() => {
        const refreshToken = localStorage.getItem('refreshToken');
        if (accessToken) return;
        if (!refreshToken) return;
        dispatch(refreshLogin(refreshToken));
    }, []);
}



