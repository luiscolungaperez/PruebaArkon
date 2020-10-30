import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTasks } from '../redux'

export const useDashboard = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.tasks)
  const [tasks, setTasks] = useState([])
  const [numbers, setNumbers] = useState({
    act: 0,
    des: 0
  })

  useEffect(()=> {
    dispatch(fetchTasks())
  }, [])

  useEffect(()=> {
    setTasks(data)
  }, [data])

  useEffect(() =>{
    let act = tasks.filter(task => task.status === 'Activo')
    let dec = tasks.filter(task => task.status === 'Desactivado')
    setNumbers({
      act: act.length,
      des: dec.length
    })
  }, [tasks])

  return numbers

}
