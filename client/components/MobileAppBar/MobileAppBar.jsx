import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BottomBarItem, MenuWrapper, MobileAppBarWrapper } from "./StyledMobileAppBar";

const MobileAppBar = () => {


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
        <MobileAppBarWrapper >
            <MenuWrapper>
                <BottomBarItem
                    active={router.pathname === '/dashboard' || router.pathname === '/'}
                > <HomeIcon className="icon" /><Link href="/dashboard" >Home</Link>
                </BottomBarItem>
                <BottomBarItem active={router.pathname === '/search-results'}>
                    <SearchIcon className="icon" /><Link href="/search-results">Search</Link></BottomBarItem>
                <BottomBarItem onClick={() => handleRoute('/')}> <ExitToAppIcon className="icon" /><p>Disconnect</p></BottomBarItem>
            </MenuWrapper>
        </MobileAppBarWrapper >
    )
}

export default MobileAppBar
