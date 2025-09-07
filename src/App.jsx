import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/hearder/head'
import Login from './components/log in/log'
import Apple from './components/sign up/sign'
import { Routes, Route } from 'react-router-dom';
import Body from './Body.jsx';
import Shopping from './shopping.jsx'


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/">
          <Route element={<Body />} index/>
        
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Apple />} />
        <Route path="shopping/:id" element={<Shopping />} />
        </Route>
      </Routes>
      
    
    </div>
  )
}

export default App
