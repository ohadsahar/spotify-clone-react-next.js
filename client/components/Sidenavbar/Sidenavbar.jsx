import { SideBarWrapper, SidebarItem } from "./StyledSidenavbar";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { useRouter } from "next/router";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Sidenavbar = () => {
    const router = useRouter();
    const accessToken = useSelector(state => state.auth.accessToken);

    useEffect(() => {
        console.log(accessToken);
        if (!accessToken) {
            window.location = '/';
        }
    }, [accessToken]);

    const handleRoute = (navigateTo) => {
        router.push(navigateTo);
    }
    return (
        <SideBarWrapper>
            <SidebarItem onClick={() => handleRoute('/dashboard')}>
                <HomeIcon className="home-icon" />
                <p>Home</p>
            </SidebarItem>
            <SidebarItem onClick={() => handleRoute('/search-results')}>
                <SearchIcon className="search-icon" />
                <p >Search</p>
            </SidebarItem>
        </SideBarWrapper>
    )
}

export default Sidenavbar
