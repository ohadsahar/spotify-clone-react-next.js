import styled from 'styled-components';

export const PlaylistWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 1rem;
cursor: pointer;

@media (max-width: 768px) {
    grid-template-columns: repeat(2,1fr);
   }

`;