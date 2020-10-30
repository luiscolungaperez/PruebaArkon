import React from 'react'
import { ThemeProvider } from 'styled-components'
import { HeaderStyles, Button, Title } from './styles/header'
import { theme } from '../../variables'
import { FaBars, FaWindowClose } from "react-icons/fa";

export const Header = ({ open, action }) => {

  const handleOpen = () => {
    action(true)
  }

  const handleClose = () => {
    action(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <HeaderStyles>
        <Title>Arkon</Title>
        {
          open 
            ? <Button type='button' onClick={handleClose}><FaWindowClose /></Button>
            : <Button type='button' onClick={handleOpen}><FaBars /></Button>
        } 
      </HeaderStyles> 
    </ThemeProvider>
  )
}