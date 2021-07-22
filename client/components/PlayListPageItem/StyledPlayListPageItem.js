import styled from 'styled-components';

export const TrackItemWrapper = styled.div`
padding: 0.5rem 1rem;
display: flex;
align-items: center;
cursor: pointer;

img {
    width: 48px;
    height: 48px;
}

p {
    margin: 0;
    padding: 0;
    color: white;
   
}

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
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    
    .title {
        font-weight: 200;
        font-size: 14px;
        color: ${props => props.active ? props.theme.colors.secondary : 'white'};
    }
    .muted {
        color: lightgrey;
        font-size: 11px;
    }

    .time {
        color: ${props => props.active ? props.theme.colors.secondary : 'white'};
        font-size: 12px;
        letter-spacing: 0.5ch;
    }


`;