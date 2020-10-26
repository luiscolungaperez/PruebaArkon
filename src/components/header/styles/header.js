import styled from 'styled-components'

export const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  background-color: ${props => props.theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.h1`
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-size: 30px;
  margin-left: 30px;
  @media (max-width: 575.98px) {
    font-size: 20px;
    margin-left: 20px;
  }
`

export const Button = styled.button`
  position: absolute;
  right: 30px;
  top: 20px;
  visibility: hidden;
  opacity: 0;
  display: flex;
  justify-content: center;
  padding: 0;
  font-size: 30px;
  color: ${props => props.theme.white};
  background-color: transparent;
  border: none;
  @media (max-width: 575.98px) {
    visibility: visible;
    opacity: 1;
  }
  @media (max-width: 767.98px) {
    visibility: visible;
    opacity: 1;
  }
`


