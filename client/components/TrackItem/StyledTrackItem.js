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
    color: white;
    opacity: 0.54;
}

/* transition: .5s ease-in-out; */
&:hover {
    background-color: #cccccc26;
   p {
    opacity: 1;
   }
}
`;

export const TrackInfo = styled.div`
display: flex;
margin-left: .5rem;
flex-direction: column;
.title {
    color: white;
    font-weight: 200;
    font-size: 14px;
}
.muted {
    color: lightgrey;
    font-size: 11px;
}


`;