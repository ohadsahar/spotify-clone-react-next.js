import styled from 'styled-components';

export const SideBarWrapper = styled.div`
   background-color: black;
    height: 100%;

`;

export const SidebarItem = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    cursor: pointer;

     .search-icon {
        color: grey;
        margin-right: .5rem;
    }
    .home-icon {
        color: grey;
        margin-right: .5rem;
    }

    a {
        text-decoration:none;
        color: white;
        font-size: 1rem;
        color:${props => props.active ? props.theme.colors.secondary : 'white'};
    }
    a::visited {
        color: white;
    }
 p{

     color: grey;
    font-size: 1rem;
 }
`;