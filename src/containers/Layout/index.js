import React, { useState } from 'react'
import { Header } from '../../components/header'
import { Sidebar } from '../../components/sidebar'
import { Content } from './styles/layout'
import { useLocation } from 'react-router-dom'

export const Layout = ({ children }) => {
  const location = useLocation().pathname
  const [action, setAction] = useState(false)

  return (
    <>
      <Header open={action} action={setAction} />
      <Sidebar open={action} action={setAction} location={location} />
      <Content style={{margin: 'auto'}}>
        { children }
      </Content>
    </>
  )
}