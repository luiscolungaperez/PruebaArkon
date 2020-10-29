import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTasks } from '../redux'

export const useAddTask = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.tasks)

  const [form, setForm] = useState({
    id: '',
    name: '',
    description: '',
    duration: 0,
    status: ''
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
      duration: 0,
      status: 'Activo'
    })
  }

  useEffect(() => {
    if (data.tasks.length === 0) {
      setForm({
        ...form,
        id: 1
      })
    } else {
      setForm({
        ...form,
        id: parseInt(data.tasks[0].id) + 1
      })
    }
  }, [])


  const handleSave = () => {
    dispatch(addTasks(form))
  }

  return [handleChange, handleSave]
}