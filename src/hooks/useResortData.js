import { useState, useEffect } from 'react'

export const useResortData = (data) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(data.sort((a, b) => b - a).reverse())
  }, [data])

  return items
}