import styled from 'styled-components';


export const SearchResultsWrapper = styled.div`
    
`;


export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 1rem;
    padding-left: .3rem;
   
   h1 {
     color: white;
   }
`;

export const SearchMiniWrapper = styled.div`
overflow-y: hidden;
> p {
  font-size: 1.25rem;
 margin: 1rem .5rem;
 font-weight: bold;
 letter-spacing: 0.1ch;
}
`;
export const SearchInputWrapper = styled.div`
 input {
  border-radius: 16px;
    border: none;
    width: 40%;
    outline: none;
    padding: .5rem;
 }
`;



