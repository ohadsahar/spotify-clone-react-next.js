import Player from '@/components/Player/Player';
import Sidenavbar from '@/components/Sidenavbar/Sidenavbar';
import { refreshLogin } from '@/store/actions/auth.actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CurrentLayout, LayoutWrapper, MainContentWrapper, PlayerWrapper, SideContentWrapper } from './StyledLayout';
const Layout = ({ children }) => {

    const authData = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                if (!authData.refreshToken || !authData.expiresIn) return;
                dispatch(refreshLogin(authData.refreshToken));
                window.history.pushState([], null, '/');
            } catch (error) {
                window.location = '/';
            }
        }, (authData.expiresIn - 60) * 1000);
        return () => clearInterval(interval);
    }, [authData.refreshToken, authData.expiresIn]);

    return (
        <LayoutWrapper>
            <MainContentWrapper>
                {
                    authData.accessToken ? <SideContentWrapper>
                        <Sidenavbar />
                    </SideContentWrapper> : null
                }
                <CurrentLayout>
                    {children}
                </CurrentLayout>
            </MainContentWrapper >
            <PlayerWrapper>
                <Player />
            </PlayerWrapper>
        </LayoutWrapper >
    )
}

export default Layout
