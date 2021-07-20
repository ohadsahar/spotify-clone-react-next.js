import styled from 'styled-components';

export const SideBarWrapper = styled.div`
   background-color: black;
    height: 100%;
    padding: .5rem;
`;

export const SidebarItem = styled.div`
    display: flex;
    align-items: center;
    padding: .5rem;
    cursor: pointer;

     .search-icon {
        color: grey;
        margin-right: .5rem;
    }
    .home-icon {
        color: grey;
        margin-right: .5rem;
    }
 p{

     color: grey;
    font-size: 1rem;
 }
`;