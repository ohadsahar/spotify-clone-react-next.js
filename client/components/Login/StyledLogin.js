import styled from 'styled-components';

export const LoginWrapper = styled.div`
height:85vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media(max-width:768px) {
    height:100%;
}
 p {
     width: 85%;
     color: ${props => props.theme.colors.secondary};
    font-size: 1.5rem;
    letter-spacing: 0.3ch;
    font-weight: bold;
    font-size: 2rem;
    text-align: center
 }

 .muted {
     color: white;
     opacity: 0.54;
     margin-top: 1rem;
     margin-bottom: 2.5rem;
     font-size: 1.25rem;
     letter-spacing: 0ch;
     font-weight: 200;
     word-break: break-word;
     width: 50%;
     @media(max-width:768px) {
         width: 100%;
     }
     
     @media(max-width:500px) {
         width: 75%;
     }
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
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.1ch;
    a {
        text-decoration: none;
        color:${props => props.theme.colors.secondary};
    }

    a:visited {
        color:${props => props.theme.colors.secondary};
    }
`;