import React from 'react'
import ReactDOM from 'react-dom';
import { Grid, InputLabel, MenuItem } from '@material-ui/core'
import { Modal, Content, CloseButton, Icon, Title, Input, GridMaterial, EditButton, SubTitle, SelectStatus} from './styles/viewDetails'
import { useGetItem } from '../../hooks/useGetItem'

export const ViewDetails = ({ onClose, item }) => {
  const [form, handleChange] = useGetItem(item)

  return ReactDOM.createPortal(
    <Modal>
      <Content>
        <CloseButton type='button' onClick={onClose}>
          <Icon />
        </CloseButton>
        <Title>Detalles de la tarea</Title>
        <GridMaterial container spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <SubTitle>Editar tarea</SubTitle>
              <Grid item xs={12}>
                <Input 
                  id='name' 
                  label={form.name}
                  name='name'
                  InputProps={{
                    readOnly: false
                  }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Input 
                  id='description'
                  label={form.description} 
                  name='description' 
                  InputProps={{
                    readOnly: false
                  }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
                <EditButton type='button' >Confirmar Cambios</EditButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            hola
          </Grid>
        </GridMaterial>
      </Content>
    </Modal>,
    document.getElementById('modal')
  )
}
