import styled from 'styled-components';

export const LoginWrapper = styled.div`
height:89vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
 p {
     width: 85%;
     color: ${props => props.theme.colors.secondary};
     font-size: 1.5rem;
     letter-spacing: 1.1ch;
     text-align:center;
 }
`;

export const ImageWrapper = styled.div`
margin-top: 2.5rem;
    img {
        width: 300px;
    height: 300px;
    }
`;

export const ButtonWrapper = styled.div`
    text-decoration: none;
    margin-top: 3rem;
    font-size: 1.25rem;
    letter-spacing:0.5ch;
    a {
        text-decoration: none;
        color:${props => props.theme.colors.secondary};
    }

    a:visited {
        color:${props => props.theme.colors.secondary};
    }
`;