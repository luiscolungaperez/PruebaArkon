import styled from 'styled-components'

export const Modal = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.4);
  z-index: 110;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.section`
  width: 400px;
  height:300px;
  background-color: white;
  border-radius: 10px;
`
