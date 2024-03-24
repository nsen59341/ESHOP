import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NAVBAR from './components/navbar'
import User from './components/users'
import Cart from './components/cart'
import HOME from './components/home'
import PageNotFound from './components/notfound'
import { Route, Routes, Navigate } from 'react-router-dom'
import PaginationProvider from './components/context/PaginationContext'
import CategoryProvider from './components/context/CategoryContext'

function App() {

  return (
    <PaginationProvider>
      <CategoryProvider>
      <NAVBAR></NAVBAR>
      <Routes>
        <Route path="/" element={<HOME />}></Route>
        <Route path="/home" element={<Navigate to="/" />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      </CategoryProvider>
    </PaginationProvider>
  )
}

export default App
