import React, { useEffect } from 'react'
import { TableBody, TableCell, Table, TableHead, TablePagination, TableRow } from '@material-ui/core'
import { PaperMaterial, TableContainerMaterial, RowsContent, TableRowMaterial } from './styles/tasks'
import { ViewDetails } from '../viewDetails'
import { useModal } from '../../hooks/useModal'
import { usePages } from '../../hooks/usePages'
import { useResortData } from '../../hooks/useResortData'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTasks } from '../../redux'
import { columns } from './columns'

export const Tasks = () => {
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
                items.length === 0
                  ? (
                      <TableRowMaterial >
                        <TableCell>
                          <RowsContent>No hay filas</RowsContent>
                        </TableCell>
                      </TableRowMaterial >
                    )
                  : (
                      items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => (
                        <TableRowMaterial hover role='checkbox' tabIndex={-1} key={item.id} onClick={() => handleClickRow(item.id)}>
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
                    )
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
      {
        open.open && 
          <ViewDetails onClose={handleClose} id={id} />
      }
    </div>
  )
}