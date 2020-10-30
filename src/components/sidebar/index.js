import React from 'react'
import { ThemeProvider } from 'styled-components'
import { SidebarStyle, Button, ButtonActive } from './styles/sidebar'
import { theme } from '../../variables'

export const Sidebar = ({ location, open, action }) => {

  const handleClose = () => {
    action(false)
  }

  return (
    <ThemeProvider theme={theme} >
      <SidebarStyle open={open}>
        {
          location === '/' 
            ?  <ButtonActive to='/' onClick={handleClose}>Dashboard</ButtonActive> 
            : <Button to='/' onClick={handleClose}>Dashboard</Button>
        }
        {
          location === '/list' 
            ? <ButtonActive to='/list' onClick={handleClose}>Lista de tareas</ButtonActive>
            : <Button to='/list' onClick={handleClose}>Lista de tareas</Button>
        }
      </SidebarStyle>
    </ThemeProvider>
  )
}
