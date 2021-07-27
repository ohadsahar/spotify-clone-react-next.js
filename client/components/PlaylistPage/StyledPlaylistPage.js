import styled from 'styled-components';

export const PlaylistPageWrapper = styled.div`
  margin-bottom: 1rem;
  position: relative;
`;

export const ArtistPlayListWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: ${props => props.backgroundColor};
    padding: 1.5rem;

.title {
    font-size: 4rem;
    font-weight: bold;
    margin-right: 1.5rem;
}
img {
    width: 200px;
    height: 200px;
    border-radius: 50%;

    @media(max-width:768px) {
        
    }
}
`;