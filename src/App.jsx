
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import Header from './header/Header'



function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/home' element={<h2>Home</h2>}/>
        <Route path='/about' element={<h2>About</h2>}/>
        <Route path='/users' element={<h2>Users</h2>}/>
        <Route path='*' element={<h2>Not Found Page</h2>}/>
      </Routes>
    </>
  )
}
export default App
