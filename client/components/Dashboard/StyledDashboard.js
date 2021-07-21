import styled from 'styled-components';

export const DashboardWrapper = styled.div`
height: 100vh;
overflow-y: scroll;
h1,h2 {
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
export const CurrentAlbumWrapper = styled.div`
    display: flex;
    flex-direction: column;
    //height: 50vh;
    overflow-y: scroll;
    height: 62vh;

`;

export const TracksWrapper = styled.div`
    max-height: 70vh;
    overflow-y: scroll;
    cursor: pointer;
`;

export const TrackWrapper = styled.div`
display: flex;
align-items: center;
padding:.5rem;
margin-bottom: .5rem;
&:hover {
     background-color: ${props => props.theme.colors.hoverCardColor};
 }

 img {
     width: 48px;
     height: 48px;
 }

 .track-id {
     color: white;
     opacity: 0.8;
     font-size: 12px;
     margin-right: .5rem;
 }
`;

export const TrackInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    >p {
     color: white;
     margin-left: .5rem;
     font-size: 0.7rem;
     font-weight: bold;;
 }




 .title {
     color: white;
     font-weight: 100;
     font-size: 12px;
 }

 .muted {
     color: white;
     opacity: 0.54;
     font-size: 10px;
 }
`;