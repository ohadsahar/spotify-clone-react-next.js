import styled from 'styled-components';



export const CategoryPlaylistDivWrapper = styled.div`
padding: 2rem;
position: relative;

>h1 {
    color: #1cd05f;
    font-size: 1.6rem;
    letter-spacing: 0.3ch;
}
`
export const CategoryPlaylistWrapper = styled.div`
display: grid;
grid-template-columns: repeat(5,1fr);
justify-items: center;

@media(min-width:2200px) {
    grid-template-columns: repeat(6,1fr);
}

@media(min-width:1439px) and (max-width:1900px) {
    grid-template-columns: repeat(4,1fr);
}

@media(min-width:1024px) and (max-width:1439px) {
    grid-template-columns: repeat(3,1fr);
}

@media(max-width:768px) {
    grid-template-columns: repeat(2,1fr);
}

@media(max-width:450px) {
    grid-template-columns: repeat(1,1fr);
}
`;

export const CategoryPlayListItemWrapper = styled.div`
cursor: pointer;
background-color: rgb(153 153 153 / 7%);
padding: 1rem;
transition: .5s ease-out;
width: 200px;
margin-right: 1rem;
@media(max-width:768px) {
    width:180px;
}
.title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: .2rem;
}
    .muted {
        color: lightgrey;
        font-size: 12px;
    }
img {
    width: 200px;
    height: 200px;
}

&:hover {
    transition: .5s ease-in;
background-color: ${props => props.theme.colors.hoverCardColor};
}
`;

export const CategoryInfoWrapper = styled.div`
padding: .5rem;
`;