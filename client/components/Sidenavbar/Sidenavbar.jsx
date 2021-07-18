import { SideBarWrapper, SidebarItem } from "./StyledSidenavbar";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';

const Sidenavbar = () => {
    return (
        <SideBarWrapper>
            <SidebarItem>
                <HomeIcon className="home-icon" />
                <p>Home</p>
            </SidebarItem>
            <SidebarItem >
                <SearchIcon className="search-icon" />
                <p>Search</p>
                {/* <input type="text" placeholder="Search songs" onChange={(e) => setSearch(e.target.value)} /> */}
            </SidebarItem>
        </SideBarWrapper>
    )
}

export default Sidenavbar
