import React from 'react'
import { Header } from '../../components/header'
import { Sidebar } from '../../components/sidebar'
import { Content } from './styles/layout'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        { children }
      </Content>
    </>
  )
}