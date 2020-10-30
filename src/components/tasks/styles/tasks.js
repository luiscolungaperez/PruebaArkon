import styled from 'styled-components'
import { Paper, TableContainer, TableRow } from '@material-ui/core'

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px; 
  width: 100%; 
`

export const PaperMaterial = styled(Paper)`
  width: 100%;
`

export const TableContainerMaterial = styled(TableContainer)`
  min-height: 330px;
  max-height: 330px;
`

export const TableRowMaterial = styled(TableRow)`
  cursor: pointer;
`

export const RowsContent = styled.h2`
  font-size: 20px;
  padding: 10px;
`
