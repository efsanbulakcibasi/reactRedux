import { useEffect } from 'react'
import './App.css'
import CourseList from './components/CourseList'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { totalItems } from './control/cartSlice'

function App() {
  const {cartItems} = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(totalItems())
  },[cartItems])
  return (
    <div className='App'>
      <Navbar/>
      <CourseList/>
    </div>
  )
}

export default App
