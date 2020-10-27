import React from 'react'
import { ThemeProvider } from 'styled-components'
import { SidebarStyle, Button } from './styles/sidebar'
import { theme } from '../../variables'

export const Sidebar = () => {
  return (
    <ThemeProvider theme={theme} >
      <SidebarStyle>
        {/* <Title>Dashboard</Title> */}
        <Button to='/'>Dashboard</Button>
        <Button to='/list'>Lista de tareas</Button>
      </SidebarStyle>
    </ThemeProvider>
  )
}
