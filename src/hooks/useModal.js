import { useState, useEffect } from 'react'

export const useModal = () => {
  const [open, setOpen] = useState({
    open: false
  })

  const handleOpen = () => {
    setOpen({
      open: true
    })
  }

  const handleClose = () => {
    setOpen({
      open: false
    })
  }

  return [open, handleOpen, handleClose]
}
