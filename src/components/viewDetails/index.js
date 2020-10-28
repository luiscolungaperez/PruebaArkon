import React from 'react'
import ReactDOM from 'react-dom';
import { Modal, Content } from './styles/viewDetails'

export const ViewDetails = ({ onClose, id }) => {
  return ReactDOM.createPortal(
    <Modal>
      <Content>
        <h1>Este es un modal</h1>
        <button type='button' onClick={onClose}>Cerrar</button>
        <p>
          {id}
        </p>
      </Content>
    </Modal>,
    document.getElementById('modal')
  )
}