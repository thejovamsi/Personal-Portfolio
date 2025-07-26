import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Work from './components/Work'

function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Home/>
      <Work/>
      <Contact/>
    </div>
    </>
  )
}

export default App
