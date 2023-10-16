import React, { useContext } from 'react'
import Inicio from './components/Inicio'
import { Navigate, Route, Routes } from "react-router-dom";
import ConfirmationPage from './components/Confirmacion';
import Login from './components/LogIn';
import { ContextoProcesos } from './context/ContextoProcesos';
import Registro from './components/Registro'

const App = () => {
  const {usuario} = useContext(ContextoProcesos)
  return (
<>
<Routes>
<Route path='/' element={<Login/>} />
<Route path="/inicio" element={ <Inicio/>} />
<Route path='/Confirmacion' element={<ConfirmationPage/> } />
<Route path='/registro' element={ <Registro/> } />
</Routes>
</>

    )
}

export default App