import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import './index.css';
import Body from './Body.jsx';
import { Routes, Route } from 'react-router-dom';
import Shopping from './shopping.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App /> 
  </BrowserRouter>,
)