import { useState } from 'react'

export const usePages = (handleOpen) => {
  
  const [id, setId] = useState('')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleClickRow = (item) => {
    setId(item)
    handleOpen()
  }

  return [page, rowsPerPage, id, handleChangePage, handleChangeRowsPerPage, handleClickRow]
}