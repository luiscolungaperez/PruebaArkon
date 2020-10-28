import styled from 'styled-components'

export const Title = styled.h2`
  padding: 10px 0;
  text-transform: uppercase;
`

export const AddButton = styled.button`
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
