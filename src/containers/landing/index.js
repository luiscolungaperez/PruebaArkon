import React from 'react'
import { Content, Image } from './styles/landing'
import tasks from '../../assets/images/tareas.png';

export const Landing = () => {
  return (
    <Content>
      <Image src={tasks} alt='Tasks' />
    </Content>
  )
}