import React from 'react'
import ReactDOM from 'react-dom';
import { Modal, Content } from './styles/addTasks'

export const AddTasks = ({ onClose }) => {
  return ReactDOM.createPortal(
    <Modal>
      <Content>
        <h1>Este es un modal</h1>
        <button type='button' onClick={onClose}>Cerrar</button>
      </Content>
    </Modal>,
    document.getElementById('modal')
  )
}