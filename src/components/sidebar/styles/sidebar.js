import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const SidebarStyle = styled.section`
  position: fixed;
  top: 70px;
  height: calc(100vh - 70px);
  width: 200px;
  background-color: ${props => props.theme.secondary};
  @media (max-width: 575.98px) {
    display: none;
  }
  @media (max-width: 767.98px) {
    display: none;
  }
`

export const Button = styled(LinkRouter)`
  display: inline-block;
  background-color: transparent;
  text-align: center;
  outline: none;
  border: none;
  width: 100%;
  color: ${props => props.theme.white};
  text-decoration: none;
  padding: 15px 0;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  &:hover, &:focus{
    text-decoration: none;
    background-color: ${props => props.theme.mustard};
    color: ${props => props.theme.primary};
    transition: 0.3s ease-in-out;
  }
`

export const ButtonActive = styled(LinkRouter)`
  display: inline-block;
  text-align: center;
  outline: none;
  border: none;
  width: 100%;
  background-color: ${props => props.theme.mustard};
  color: ${props => props.theme.primary};
  text-decoration: none;
  padding: 15px 0;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  &:hover, &:focus{
    text-decoration: none;
  }
`
