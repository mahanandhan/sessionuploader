import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import Main from './components/Main'
import Home from './pages/Home'
import About from './pages/About'
import Pdf from './pages/Pdf'
import Videos from './pages/Videos'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/dashboard" element={<Main />} />
        {/* Add more routes as needed */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pdf" element={<Pdf />} />
        <Route path="/videos" element={<Videos />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  )
}

export default App