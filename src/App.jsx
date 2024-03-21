import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NAVBAR from './components/navbar'
import PRODUCTS from './components/products'
import HOME from './components/home'
import PageNotFound from './components/notfound'
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HOME />}></Route>
        <Route path="/home" element={<Navigate to="/" />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
