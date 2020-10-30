import React from 'react'
import ReactDOM from 'react-dom';
import { InputLabel, MenuItem } from '@material-ui/core'
import { Modal, Content, CloseButton, Icon, Title, Input, GridMaterial, EditButton, SubTitle, SelectStatus, Form} from './styles/viewDetails'
import { useGetItem } from '../../hooks/useGetItem'
import { useDispatch } from 'react-redux'
import { putTask } from '../../redux'

export const ViewDetails = ({ onClose, item }) => {
  const [form, handleChange] = useGetItem(item)
  const dispatch = useDispatch()

  const handleSave = () => {
    dispatch(putTask(form))
  }

  return ReactDOM.createPortal(
    <Modal>
      <Content>
        <CloseButton type='button' onClick={onClose}>
          <Icon />
        </CloseButton>
        <Title>Detalles de la tarea</Title>
        <GridMaterial container spacing={2}>
          <Form item xs={12} >
            <SubTitle>Editar tarea</SubTitle>
            <Input 
              id='name' 
              label={form.name}
              name='name'
              InputProps={{
                readOnly: false
              }}
              onChange={handleChange}
            />
            <Input 
              id='description'
              label={form.description} 
              name='description' 
              InputProps={{
                readOnly: false
              }}
              onChange={handleChange}
            />
            <InputLabel id='statusLabel'>Estado</InputLabel>
            <SelectStatus
              labelId='statusLabel'
              id='status'
              name='status'
              value={form.status}
              onChange={handleChange}
            >
              <MenuItem value='Activo'>Activo</MenuItem>
              <MenuItem value='Desactivado'>Desactivado</MenuItem>
            </SelectStatus>
            <EditButton type='button' onClick={handleSave} >Confirmar Cambios</EditButton>
          </Form>
        </GridMaterial>
      </Content>
    </Modal>,
    document.getElementById('modal')
  )
}
