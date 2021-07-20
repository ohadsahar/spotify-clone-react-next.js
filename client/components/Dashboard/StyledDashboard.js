import styled from 'styled-components';


export const DashboardWrapper = styled.div`
padding: .5rem;
h1 {
       color: white;
   }

`

export const AlbumsWrapper = styled.div`

display: grid;
   grid-template-columns: repeat(3,1fr);


>img {
    width: 64px;
    height: 64px;
}
`;

export const AlbumWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem;
    background-color: red;
    margin-right: 1.5rem;
    margin-bottom: 1rem;
    border-radius: .3rem;
    background-color: rgb(153 153 153 / 7%);
    width: 90%;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.hoverCardColor};
        transition: .5s ease-in;
    }

> p {
    color: white;
    font-size: 1rem;
}
`;



export const ArtistInfoWrapper = styled.div`
    //width: 6rem;
    color: white;
    font-size: 0.7rem;
`;