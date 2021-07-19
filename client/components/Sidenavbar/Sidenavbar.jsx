import { SideBarWrapper, SidebarItem } from "./StyledSidenavbar";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { useRouter } from "next/router";

const Sidenavbar = () => {
    const router = useRouter();

    const handleRoute = (navigateTo) => {
        router.push('/search-results');
    }
    return (
        <SideBarWrapper>
            <SidebarItem>
                <HomeIcon className="home-icon" />
                <p>Home</p>
            </SidebarItem>
            <SidebarItem >
                <SearchIcon className="search-icon" />
                <p onClick={() => handleRoute('Search')}>Search</p>
            </SidebarItem>
        </SideBarWrapper>
    )
}

export default Sidenavbar
