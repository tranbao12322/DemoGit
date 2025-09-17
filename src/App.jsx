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
import ContactPage from './components/thongtinlienhe/ContactPage.jsx'
import HuongDanMuaHang from './components/huongdanmuahang/HuongDanMuaHang.jsx'
import DoiTac from './components/DoiTac/DoiTac.jsx'
import HshopChannel from './components/Hshopchanel/HshopChannel.jsx'
import CartPage from './components/cart/cart.jsx'
import CheckoutPage from './components/checkout/Checkout.jsx'

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
},
  {
    id:"contacpage",
    path:"/Lien-He",
    element: <ContactPage />,
    isPrivate: false
  },
  {
    id:"HuongdanMH",
    path:"/huong-dan-mua-hang",
    element: <HuongDanMuaHang />,
    isPrivate: false
  },
  {
    id:"DoiTac",
    path:"/Doi-Tac",
    element: <DoiTac />,
    isPrivate: false
  },
  {
    id:"Hshopchanel",
    path:"/Hshop-chanel",
    element: <HshopChannel />,
    isPrivate: false
  },
  {
    id:"card",
    path:"/cart",
    element: <CartPage />,
    isPrivate: false
  },
  {
    id:"checkout",
    path:"/checkout",
    element: <CheckoutPage />,
    isPrivate: false
  },


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