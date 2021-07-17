import styled from 'styled-components';

export const TrackItemWrapper = styled.div`
padding: .5rem;
display: flex;
align-items: center;
cursor: pointer;
img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
}

p {
    margin: 0;
    padding: 0;
}
`;

export const TrackInfo = styled.div`
display: flex;
margin-left: .5rem;
flex-direction: column;

.muted {
    color: lightgrey;
}


`;