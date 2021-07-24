import styled from 'styled-components';

export const CurrentAlbumWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TracksWrapper = styled.div`
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
     opacity: 0.8;
     font-size: 12px;
     margin-right: .5rem;
    color: ${props => props.active ? props.theme.colors.secondary : 'white'};
 }
`;

export const TrackInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    >p {
     color: white;
     margin-left: .5rem;
     font-size: 0.7rem;
     font-weight: bold;;
 }
.track-details {
    margin-left: .5rem;
    .title {
     font-weight: 100;
     font-size: 12px;
     color: ${props => props.active ? props.theme.colors.secondary : 'white'};
 }

 .muted {
     color: white;
     opacity: 0.54;
     font-size: 10px;
 }
}

.time {
    >p {
    color: ${props => props.active ? props.theme.colors.secondary : 'white'};
    font-size: 12px;
    letter-spacing: 0.5ch;
    }
}

`;

export const AlbumCardInfo = styled.div`
display: flex;
align-items: flex-end;
margin-bottom: 2rem;
padding: 2rem;
h2 {
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-left: .5rem;
}

img {
    width: 128px;
    height: 128px;
}
`;