import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import Add from './pages/Add'
import Get from './pages/Get'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path='/add' element={<Add />} />
        <Route path="/get" element={<Get />} />
      </Routes>
    </div>
  )
}

export default App
