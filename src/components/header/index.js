import React from 'react'
import { ThemeProvider } from 'styled-components'
import { HeaderStyles, Button, Title } from './styles/header'
import { theme } from '../../variables'
import { FaBars } from "react-icons/fa";

export const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderStyles>
        <Title>Arkon</Title>
        <Button>
          <FaBars />
        </Button>
      </HeaderStyles> 
    </ThemeProvider>
  )
}