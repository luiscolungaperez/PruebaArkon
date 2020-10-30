import React, { useState, useEffect }from 'react'
import ReactDOM from 'react-dom';
import { Modal, Content, Title, CloseButton, Icon, Form, Input, AddButton } from './styles/addTasks'
import { Grid } from '@material-ui/core'
import { useAddTask } from '../../hooks/useAddTask'
import { useSelector } from 'react-redux'


export const AddTasks = ({ onClose }) => {
  const data = useSelector(state => state.tasks)
  const [handleChange, handleSave] = useAddTask(onClose)
  
  return ReactDOM.createPortal(
    <Modal>
      <Content>
        <CloseButton type='button' onClick={onClose}>
          <Icon />
        </CloseButton>
        <Form noValidate autoComplete='off'>
            <Title>Agregar tarea</Title>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input id='name' label='Tarea' name='name' onChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <Input id='description' label='Descripcion' name='description' onChange={handleChange} />
              </Grid>
            </Grid>
            <AddButton type='button' onClick={handleSave} >Agregar tarea</AddButton>
        </Form>
      </Content>
    </Modal>,
    document.getElementById('modal')
  )
}