import { useState } from 'react'

export const usePages = (handleOpen) => {  
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [task, setTask] = useState({
    id: '',
    name: '',
    description: '',
    duration: '',
    status: ''
  })

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleClickRow = (item) => {
    setTask(item)
    handleOpen()
  }

  return [page, rowsPerPage, task, handleChangePage, handleChangeRowsPerPage, handleClickRow]
}