import React from 'react'
import { ThemeProvider } from 'styled-components'
import { SidebarStyle, Button, ButtonActive } from './styles/sidebar'
import { theme } from '../../variables'

export const Sidebar = ({ location }) => {
  return (
    <ThemeProvider theme={theme} >
      <SidebarStyle>
        {
          location === '/' 
            ?  <ButtonActive to='/'>Dashboard</ButtonActive> 
            : <Button to='/'>Dashboard</Button>
        }
        {
          location === '/list' 
            ? <ButtonActive to='/list'>Lista de tareas</ButtonActive>
            : <Button to='/list'>Lista de tareas</Button>
        }
      </SidebarStyle>
    </ThemeProvider>
  )
}
