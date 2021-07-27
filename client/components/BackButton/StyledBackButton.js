import styled from 'styled-components';

export const BackButtonWrapper = styled.div`
    background-color: white;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .2s ease-in;
    position: absolute;
    left: .5rem;
    top: .5rem;
    &:hover {
        transition: .2s ease-in;
        background-color: #7b7878;
    }
    .icon {
        color: ${props => props.theme.colors.secondary};
        font-weight: bold;
        margin-left: .4rem;
        font-size: 16px;
    }

`;