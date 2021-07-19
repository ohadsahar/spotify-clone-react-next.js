import Player from '@/components/Player/Player';
import Sidenavbar from '@/components/Sidenavbar/Sidenavbar';
import { useSelector } from 'react-redux';
import { CurrentLayout, LayoutWrapper, MainContentWrapper, PlayerWrapper, SideContentWrapper } from './StyledLayout';
const Layout = ({ children }) => {

    const accessToken = useSelector(state => state.auth.accessToken);

    return (
        <LayoutWrapper>
            <MainContentWrapper>
                {
                    accessToken ? <SideContentWrapper>
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
