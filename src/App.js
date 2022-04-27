import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContainer from './pages/CartContainer'
import Navbar from './components/Navbar'

const App = () => {
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
