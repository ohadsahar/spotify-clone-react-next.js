import styled from 'styled-components';

export const MobileAppBarWrapper = styled.div`
background-color: ${props => props.theme.colors.hoverCardColor};
    height: 64px;
    width: 100%;
    position: absolute;
    bottom: 0;
    @media(min-width:768px) {
        visibility: hidden;
    }
`;

export const MenuWrapper = styled.div`
     display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`;

export const BottomBarItem = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    .icon {
        color: white;
        margin-bottom: .2rem;
    }
    a {
            text-decoration:none;
            color:${props => props.active ? props.theme.colors.secondary : 'white'};
            font-size: 0.8rem;
        }
        a:visited {
            color:${props => props.active ? props.theme.colors.secondary : 'white'};
        }
 

`;




