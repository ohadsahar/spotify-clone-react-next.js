import styled from 'styled-components';

export const LayoutWrapper = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    /* height: 100vh; */
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
`;

export const CurrentLayout = styled.div`
  width: 85%; 
  overflow-y: scroll;
  height: 93%;
  background-color: ${props => props.theme.colors.main};
`;

export const PlayerWrapper = styled.div`
position: absolute;
bottom: 0;
width: 100%;
`;