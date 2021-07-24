import { SideBarWrapper, SidebarItem } from "./StyledSidenavbar";
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import { useRouter } from "next/router";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { disconnect } from "@/store/actions/auth.actions";
import Link from 'next/link';

const Sidenavbar = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.auth.accessToken);

    useEffect(() => {
        if (!accessToken) {
            window.location = '/';
        }
    }, [accessToken]);

    const handleRoute = (navigateTo) => {
        if (navigateTo === '/') {
            dispatch(disconnect());
            router.push(navigateTo);
        } else {
            router.push(navigateTo);
        }
    }
    return (
        <SideBarWrapper>
            <SidebarItem active={router.pathname === '/dashboard' || router.pathname === '/'} >
                <HomeIcon className="home-icon" />
                <Link href="/dashboard">Home</Link>
            </SidebarItem>
            <SidebarItem active={router.pathname === '/search-results'}>
                <SearchIcon className="search-icon" />
                <Link className="link" href="/search-results">Search</Link>
            </SidebarItem>
            <SidebarItem onClick={() => handleRoute('/')}>
                <ExitToAppIcon className="search-icon" />
                <a >Disconnect</a>
            </SidebarItem>
            <p>{router.pathname === '/dashboard'}</p>
        </SideBarWrapper>
    )
}

export default Sidenavbar
