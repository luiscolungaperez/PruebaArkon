import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { Grid, TextField, Select} from '@material-ui/core'

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
  width: 450px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  transition: 1s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const CloseButton = styled.button`
  position: absolute;
  right: 15%;
  top: 30px;
  background-color: transparent;
  color: ${props => props.theme.white};
  border: none;
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  &:hover {
    transition: 0.3s ease-in-out;
    background-color: rgba(0,0,0,0.3);
    font-weight: 700;
  }
  @media (max-width: 575.98px) {
    top: 60px;
    right: 10px;
  }
`

export const Icon = styled(AiOutlineClose)`
  font-size: 30px;
`

export const Title = styled.h2`
  padding: 0 10px;
  text-align: center;
`

export const Input = styled(TextField)`
  width: 100%;
`
export const GridMaterial = styled(Grid)`
  padding: 15px;
`

export const EditButton = styled.button`
  padding: 5px;
  border: none;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  font-weight: 700;
  text-transform: uppercase;
  transition:0.3s ease-in-out;
  &:hover{
    transition:0.3s ease-in-out;
    transform: scale(1.05);
  }
`
export const SubTitle = styled.h3`
  width: 100%;
  text-align: center;
`

export const SelectStatus = styled(Select)`
  width: 100%;
`