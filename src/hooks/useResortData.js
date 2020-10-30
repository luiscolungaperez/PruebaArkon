import { useState, useEffect } from 'react'

export const useResortData = (data, filter) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    if(!filter){
     setItems(data.reverse())
    }
    else if(filter === 30){
      setItems(data.filter(item => item.duration > 0 && item.duration < 31))
    }else if(filter === 60){
      setItems(data.filter(item => item.duration > 30 && item.duration < 61))
    }else if(filter === 90){
      setItems(data.filter(item => item.duration > 60 && item.duration < 91))
    }
  }, [data, filter])

  return items
}