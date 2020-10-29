import React from 'react'
import { Header } from '../../components/header'
import { Sidebar } from '../../components/sidebar'
import { Content } from './styles/layout'
import { useLocation } from 'react-router-dom'

export const Layout = ({ children }) => {
  const location = useLocation().pathname
  return (
    <>
      <Header />
      <Sidebar location={location} />
      <Content style={{margin: 'auto'}}>
        { children }
      </Content>
    </>
  )
}