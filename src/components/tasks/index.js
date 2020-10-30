import React, { useEffect } from 'react'
import { TableBody, TableCell, Table, TableHead, TablePagination, TableRow, CircularProgress } from '@material-ui/core'
import { Content, PaperMaterial, TableContainerMaterial, TableRowMaterial } from './styles/tasks'
import { ViewDetails } from '../viewDetails'
import { useModal } from '../../hooks/useModal'
import { usePages } from '../../hooks/usePages'
import { useResortData } from '../../hooks/useResortData'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTasks } from '../../redux'
import { columns } from './columns'

export const Tasks = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state)
  const [open, handleOpen, handleClose] = useModal()
  const [page, rowsPerPage, task, handleChangePage, handleChangeRowsPerPage, handleClickRow] = usePages(handleOpen)
  const items = useResortData(data.tasks)

  
  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  return(
    <Content>
      {
        !data.loading
          ? (
              <PaperMaterial>
                <TableContainerMaterial>
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
                          <TableRowMaterial hover role='checkbox' tabIndex={-1} key={item.id} onClick={() => handleClickRow(item)}>
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
                          </TableRowMaterial>
                        ))      
                      }
                    </TableBody>
                  </Table>
                </TableContainerMaterial>
                <TablePagination
                  rowsPerPageOptions={[5]}
                  component='div'
                  count={items.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </PaperMaterial>
            )
          : <CircularProgress />
      }
      
      {
        open.open && 
          <ViewDetails onClose={handleClose} item={task} />
      }
    </Content>
  )
}