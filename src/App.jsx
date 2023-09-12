import React from 'react'
import Inicio from './components/Inicio'
import { Route, Routes } from "react-router-dom";
import ConfirmationPage from './components/Confirmacion';


const App = () => {
  return (
<>
<Routes>
<Route path="/" element={<Inicio/>} />
<Route path='/Confirmacion' element={ <ConfirmationPage/> } />
</Routes>
</>

    )
}

export default App