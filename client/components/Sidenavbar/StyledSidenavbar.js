import styled from 'styled-components';

export const SideBarWrapper = styled.section`
   flex-basis: 20%;
   background-color: black;
   height: 100vh;
`;

export const SidebarItem = styled.section`
    display: flex;
    align-items: center;
    padding: .5rem;
    cursor: pointer;

    /* background-color: rgb(153 153 153);
    color: white; */


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