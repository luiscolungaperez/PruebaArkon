import React from 'react'
import { Content } from './styles/listTasks'
import { Tasks } from '../../components/tasks'
import { AddTasks } from '../../components/addTask'
import { useModal } from '../../hooks/useModal'
import { Theme, Title, AddButton  } from './styles/listTasks'
import { theme } from '../../variables'

export const ListTasks = () => {
  const [open, handleOpen, handleClose] = useModal()
  
  return (
    <Theme theme={theme}>
      <Content>
        <Title>Listado de tareas</Title>
        <AddButton type='button' onClick={ handleOpen } >Crear tarea</AddButton>
        {open.open && (
          <AddTasks onClose={ handleClose } />
        )}
        <Tasks />
      </Content>
    </Theme>
  )
} 
