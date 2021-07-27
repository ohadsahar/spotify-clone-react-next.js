import styled from 'styled-components';

export const BackButtonWrapper = styled.div`
    background-color: ${props => props.theme.colors.hoverCardColor};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .2s ease-in;
    &:hover {
        transition: .2s ease-in;
        background-color: #cccccc5e;
    }
    .icon {
        color: ${props => props.theme.colors.secondary};
        font-weight: bold;
        margin-left: .4rem;
        font-size: 16px;
    }

`;