import styled from 'styled-components';

export const LayoutWrapper = styled.div`
    display: flex;
    position: relative;
    width: 100%;
`;

export const MainContentWrapper = styled.div`
 display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.main};
`;
export const SideContentWrapper = styled.div`
  width: 15%;
  height: 100vh;

  @media(max-width:768px) {
        width: 0%;
        visibility: hidden;
    }
`;

export const CurrentLayout = styled.div`
  width: 85%; 
  overflow-y: scroll;
  height: calc(100vh - 90px);
  background-color: ${props => props.theme.colors.main};
  @media(max-width:768px) {
        width: 100%;
        height: calc(100vh - 150px);
    }
`;

export const PlayerWrapper = styled.div`
position: absolute;
bottom: 0;
width: 100%;
padding-bottom: 64px;
padding-top: 64px;

@media(min-width:768px) {
  padding:0;
}
`;