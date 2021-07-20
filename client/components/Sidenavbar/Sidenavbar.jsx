import { SideBarWrapper, SidebarItem } from "./StyledSidenavbar";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { useRouter } from "next/router";

const Sidenavbar = () => {
    const router = useRouter();

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
