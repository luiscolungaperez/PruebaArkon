import React, { useState } from 'react'
import { Content } from './styles/listTasks'
import { Tasks } from '../../components/tasks'
import { AddTasks } from '../../components/addTask'
import { useModal } from '../../hooks/useModal'
import { Theme, Title, AddButton, Actions, SelectContent } from './styles/listTasks'
import { theme } from '../../variables'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

export const ListTasks = () => {
  const [open, handleOpen, handleClose] = useModal()
  const [filter, setFilter] = useState('')
  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <Theme theme={theme}>
      <Content>
        <Title>Listado de tareas</Title>
        <Actions>
          <SelectContent>
            <InputLabel id='search'>Busqueda</InputLabel>
            <Select
              labelId='search'
              id='duration'
              name='duration'
              value={filter}
              onChange={handleChange}
            >
              <MenuItem value={30}>30 minutos</MenuItem>
              <MenuItem value={60}>60 minutos</MenuItem>
              <MenuItem value={90}>90 minutos</MenuItem>
            </Select>
          </SelectContent>

        
          <AddButton type='button' onClick={ handleOpen } >Crear tarea</AddButton>
        </Actions>
        {open.open && (
          <AddTasks onClose={ handleClose } />
        )}
        <Tasks filter={filter} />
      </Content>
    </Theme>
  )
} 
