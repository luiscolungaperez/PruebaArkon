import styled from 'styled-components'

export const Content = styled.section`
  position: absolute;
  top: 70px;
  bottom: 0;
  right: 0;
  width: calc(100% - calc(200px + 20px));
  max-width: calc(100% - calc(200px + 20px));
  height: calc(100vh - 90px);
  max-height: calc(100vh - 90px);
  padding: 10px;
  overflow-y: auto;
  @media (max-width: 575.98px) {
    width: 100vw;
    max-width: calc(100vw - 20px);
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
  }
  @media (max-width: 767.98px) {
    width: 100vw;
    max-width: calc(100vw - 20px);
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
  }
`
