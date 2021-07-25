import styled from 'styled-components';

export const DashboardWrapper = styled.div`
padding: 1rem 1rem 2rem 1rem;
overflow-x: hidden;
h1,h2 {
       color: white;
   }

   @media(min-width:768px) {
      padding: 1rem;
    }
`

export const AlbumsWrapper = styled.div`
    display: grid;
   grid-template-columns: repeat(3,1fr);

   @media(max-width:768px) {
    grid-template-columns: repeat(2,1fr);
   }

   @media(max-width:450px) {
    grid-template-columns: repeat(1,1fr);
   }


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
    transition: .5s ease-out;
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
    color: white;
    font-size: 0.7rem;

    .title {
        font-weight:bold;
        font-size: 0.8rem;
        margin-left: .5rem;
    }
`;


