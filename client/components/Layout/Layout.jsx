import Player from '@/components/Player/Player';
import Sidenavbar from '@/components/Sidenavbar/Sidenavbar';
import { useSelector } from 'react-redux';
import { CurrentLayout, LayoutWrapper, MainContentWrapper, PlayerWrapper, SideContentWrapper } from './StyledLayout';
const Layout = ({ children }) => {

    const authData = useSelector(state => state.auth);
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
