import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../variables'
import { Title, Graphic } from './styles/chart'

export const Chart = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <Title>Tareas Activas</Title>
      <Graphic
        origin={{ y: 180 }}
        innerRadius={100}
        data={
          [
            { x: `Activo ${(data.act * 100 / (data.act + data.des))}%`, y: (data.act * 100 / (data.act + data.des)) },
            { x: `Desactivado ${(data.des * 100 / (data.act + data.des))}%`, y: (data.des * 100 / (data.act + data.des)) },
          ]
        }
        colorScale={[theme.primary, theme.yellow, theme.secondary, theme.mustard]}
        // height={250}
        // padding={{ top: 60, bottom: 60 }}
        // animate={{duration: 5000}}
      />
    </ThemeProvider>
  )
}
