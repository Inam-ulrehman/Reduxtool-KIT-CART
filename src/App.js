import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContainer from './pages/CartContainer'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { totalCart } from './features/cart/cartSlice'

const App = () => {
  // const { cartItems } = useSelector((state) => state.cart)
  // console.log(cartItems)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(totalCart())
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<CartContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
