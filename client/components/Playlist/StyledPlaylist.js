import styled from 'styled-components';

export const PlaylistWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-gap: 1rem;
cursor: pointer;



@media (max-width: 1024px) {
    grid-template-columns: repeat(3,1fr);
   }

@media (min-width: 768px) {
    grid-template-columns: repeat(2,1fr);
   }

   @media (max-width: 500px) {
    grid-template-columns: repeat(1,1fr);
   }

`;