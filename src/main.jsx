import React from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Proveedor } from './context/ContextoProcesos.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Proveedor>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Proveedor>
 
  
  </React.StrictMode>,
)
 