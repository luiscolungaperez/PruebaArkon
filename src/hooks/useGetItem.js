import { useState } from 'react'

export const useGetItem = (item) => {
  const [form, setForm] = useState({
    id: item.id,
    name: item.name,
    description: item.description,
    duration: item.duration,
    status: item.status,
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return [form, handleChange]
}
