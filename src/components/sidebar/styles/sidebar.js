import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const SidebarStyle = styled.section`
  position: fixed;
  top: 70px;
  height: calc(100vh - 70px);
  width: 200px;
  background-color: ${props => props.theme.secondary};
  // Extra small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    display: none;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    display: none;
  }

  @media (max-width: 991.98px) {  }

  @media (max-width: 1199.98px) {  }

`

export const Title = styled.h2`
  text-align: center;
  padding: 10px;
`

export const Button = styled(LinkRouter)`
  display: inline-block;
  background-color: transparent;
  text-align: center;
  outline: none;
  border: none;
  width: 100%;
  color: ${props => props.theme.black};
  text-decoration: none;
  padding: 15px 0;
  &:hover{
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
  }
`
