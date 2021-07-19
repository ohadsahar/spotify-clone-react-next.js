import styled from 'styled-components';

export const ArtistsCardWrapper = styled.div`
background-color: rgb(0 0 0 / 54%);
padding: 2rem;
margin-top: 2rem;
height: 150px;
width: 50%;
position: relative;
border-radius: 8px;

&:hover {
    transition: .5s ease-in-out;
    background-color: #cccccc26;
}
`;

export const ArtistInfoWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15%;

    .title {
        font-size: 24px;
        font-weight: bold;
        margin-top: 1rem;
    }
    .subtitle {
        font-weight: bold;
        letter-spacing: 1.1ch;
        font-size: 12px;
    }
>p {
    color: white;
}

>img {
    width: 96px;
    height: 96px;
    border-radius: 50%;
}
`;

export const IconWrapper = styled.div`
position: absolute;
background-color: ${props => props.theme.colors.secondary};
border-radius: 50%;
width: 48px;
height: 48px;
display: flex;
right:1rem;
bottom: 1rem;
align-items: center;
    justify-content: center;
.play-icon {

    color: white;
}


`;