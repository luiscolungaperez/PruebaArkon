import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from 'styled-components'
import { Content, Paper, Title, Number } from './styles/dashboard'
import { theme } from '../../variables'
import { Chart } from '../../components/Chart'
import { useDashboard } from '../../hooks/useDashboard'

export const Dashboard = () => {
  const numbers = useDashboard()

  return (
    <ThemeProvider theme={theme}>
      <Content>
        <Title>Dashboard</Title>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper>
              <Chart data={numbers}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <Number>{numbers.act + numbers.des}</Number>
              <h3>Total de tareas</h3>
            </Paper>
          </Grid>
        </Grid>
      </Content>
    </ThemeProvider>
  )
}
