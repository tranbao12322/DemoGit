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
import Canhan from './components/thongtincanhan.jsx';

const routes = [
  {
    id: "home",
    path: "/",
    element: <Body />,
    isPrivate: false
  },

  {
    id: "login",
    path: "/login",
    element: <Login />,
    isPrivate: false
  },
  {
    id: "signin",
    path: "/signin",
    element: <Apple />,
    isPrivate: false
  },
  {
    id: "shopping",
    path: "/shopping/:id",
    element: <Shopping />,
    isPrivate: false
  },
  {
    id: "ttcn",
    path: "/ttcn",
    element: <Canhan />,
    isPrivate: true
  },
  {
  id: "notfound",
  path: "*",
  element: (
    <div className="not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
      <button onClick={() => window.location.href = '/'}>Go Home</button>
    </div>
  ),
  isPrivate: false
}


]

function App() {


  return (
    <div>
      <Header />
      <Routes>
        {
        routes.map(
          route => <Route 
          key={route.id}
          path={route.path} 
          element={route.element}  />)
        
        }
      </Routes>  
    </div>
    
  )
}

export default App