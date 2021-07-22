import styled from 'styled-components';

export const PlaylistItemWrapper = styled.div`
cursor: pointer;
background-color: rgb(153 153 153 / 7%);
padding: 1rem;
transition: .5s ease-out;
    
.title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: .2rem;
}
    .muted {
        color: lightgrey;
        font-size: 12px;
    }
img {
    width: 200px;
    height: 200px;
}

&:hover {
    transition: .5s ease-in;
background-color: ${props => props.theme.colors.hoverCardColor};
}
`;

export const PlaylistInfoWrapper = styled.div`
padding: .5rem;
`;