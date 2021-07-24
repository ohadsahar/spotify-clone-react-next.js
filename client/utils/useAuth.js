import { refreshLogin } from '@/store/actions/auth.actions';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function useAuth() {

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) return;
        dispatch(refreshLogin(refreshToken));
    }, []);
}



