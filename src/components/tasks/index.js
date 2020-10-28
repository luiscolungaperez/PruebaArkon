import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import { makeStyles } from '@material-ui/core/styles'
import { ViewDetails } from '../viewDetails'
import { useModal } from '../../hooks/useModal'
import { usePages } from '../../hooks/usePages'
import { useResortData } from '../../hooks/useResortData'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTasks } from '../../redux'
import { columns } from './columns'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export const Tasks = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const data = useSelector((state) => state.tasks)
  const [open, handleOpen, handleClose] = useModal()
  const [page, rowsPerPage, id, handleChangePage, handleChangeRowsPerPage, handleClickRow] = usePages(handleOpen)
  const items = useResortData(data.tasks)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  return(
    <div style={{ height: 400, width: '100%' }}>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {
                items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => (
                  <TableRow hover role='checkbox' tabIndex={-1} key={item.id} onClick={() => handleClickRow(item.id)}>
                    {
                      columns.map(column => {
                        const value = item[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        )
                      })
                    }
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5]}
          component='div'
          count={items.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      {
        open.open && 
          <ViewDetails onClose={handleClose} id={id} />
      }
    </div>
  )
}