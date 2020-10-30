import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

export const Theme = styled(ThemeProvider)`
  margin: 0 auto;
`

export const Content = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 575.98px) {
    justify-content: space-evenly;
  }
`

export const Actions = styled.section`
  display: flex;
  justify-content: space-between;
`

export const SelectContent = styled.div`

`

export const Title = styled.h2`
  padding: 10px 0;
  text-transform: uppercase;
  @media (max-width: 575.98px) {
    text-align: center;
  }
`

export const AddButton = styled.button`
  align-self: flex-end;
  padding: 5px 20px;
  margin: 10px 10px 10px 0;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  font-size: 16px;
  border: none;
  font-weight: 700;
  transition:1s ease-in-out;
  float: right;
  &:hover{
    transition:0.3s ease-in-out;
    transform: scale(1.05);
  }
`
