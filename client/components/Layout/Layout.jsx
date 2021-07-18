import { LayoutWrapper, SideContentWrapper, MainContentWrapper } from './StyledLayout';
import Sidenavbar from '@/components/Sidenavbar/Sidenavbar';
const Layout = ({ children }) => {
    return (
        <LayoutWrapper>
            <SideContentWrapper>
                <Sidenavbar />
            </SideContentWrapper>
            <MainContentWrapper>
                {children}
            </MainContentWrapper>
        </LayoutWrapper>
    )
}

export default Layout
