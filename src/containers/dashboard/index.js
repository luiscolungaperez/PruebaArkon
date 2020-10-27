import React from 'react'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from 'styled-components'
import { Content, Paper } from './styles/dashboard'
import { theme } from '../../variables'
import { Chart } from '../../components/Chart'

export const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Content>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper>
              <Chart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              hola mundo
            </Paper>
          </Grid>
        </Grid>
      </Content>
    </ThemeProvider>
  )
}
