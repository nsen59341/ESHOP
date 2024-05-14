import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NAVBAR from './components/navbar'
import Cart from './pages/cart'
import HOME from './pages/home'
import PageNotFound from './pages/notfound'
import { Route, Routes, Navigate } from 'react-router-dom'
import PaginationProvider from './context/PaginationContext'
import CategoryProvider from './context/CategoryContext'

function App() {

  return (
    <PaginationProvider>
      <CategoryProvider>
      <NAVBAR></NAVBAR>
      <Routes>
        <Route path="/" element={<HOME />}></Route>
        <Route path="/home" element={<Navigate to="/" />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      </CategoryProvider>
    </PaginationProvider>
  )
}

export default App
