import styled from 'styled-components';

export const PlaylistPageWrapper = styled.div`
    height: 82vh;
    overflow-y: scroll;
    padding: 1.5rem;

`;

export const ArtistPlayListWrapper = styled.div`
display: flex;
    align-items: center;
    justify-content: flex-end;

.title {
    font-size: 4rem;
    font-weight: bold;
    margin-right: 1.5rem;
}
img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
`;