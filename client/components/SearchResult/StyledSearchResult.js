import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  padding:.5rem;
  flex-direction: column;
  width: 100%;
   
   h1 {
     color: white;
   }
`;

export const SearchInput = styled.input`
    border-radius: 16px;
    border: none;
    width: 40%;
    outline: none;
    padding: .5rem;
`;

export const SearchResultsWrapper = styled.div`
    overflow-y: scroll;
    max-height: calc(93vh - 4.5rem);
    padding:.5rem;
`;

