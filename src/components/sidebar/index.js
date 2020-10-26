import React from 'react'
import { ThemeProvider } from 'styled-components'
import { SidebarStyle, Button, Title } from './styles/sidebar'
import { theme } from '../../variables'

export const Sidebar = () => {
  return (
    <ThemeProvider theme={theme} >
      <SidebarStyle>
        <Title>Dashboard</Title>
        <Button to='/'>Landing</Button>
        <Button to='/add'>Agregar tarea</Button>
        <Button to='/edit'>Modificar tarea</Button>
        <Button to='/delete'>Eliminar tarea</Button>
        <Button to='/list'>Lista de tareas</Button>
      </SidebarStyle>
    </ThemeProvider>
  )
}