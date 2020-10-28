import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AddTasks } from '../../components/addTask'
import { Tasks } from '../../components/tasks'
import { useModal } from '../../hooks/useModal'
import { Title, AddButton } from './styles/listTasks'
import { theme } from '../../variables'

export const ListTasks = () => {
  const [open, handleOpen, handleClose] = useModal()

  return (
    <ThemeProvider theme={theme}>
      <Title>Listado de tareas</Title>
      <AddButton type='button' onClick={ handleOpen } >Crear tarea</AddButton>
      {open.open && (
        <AddTasks onClose={ handleClose } />
      )}
      <Tasks />
    </ThemeProvider>
  )
} 
