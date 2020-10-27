import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../variables'
import { Title, Graphic } from './styles/chart'

export const Chart = () => {
  return (
    <ThemeProvider theme={theme}>
      <Title>Tareas</Title>
      <Graphic
        innerRadius={100}
        data={
          [
            { x: 'Completadas', y: 33 },
            { x: 'Eliminadas', y: 34 },
            { x: 'En Progreso', y: 33 }
          ]
        }
        colorScale={[theme.primary, theme.yellow, theme.secondary, theme.mustard]}
        padding={{ top: 20, bottom: 60 }}
        // animate={{duration: 5000}}
      />
    </ThemeProvider>
  )
}
