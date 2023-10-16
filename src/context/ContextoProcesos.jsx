import React, { useState } from 'react'

const ContextoProcesos = React.createContext();

const Proveedor = ({children}) => {  
const [procesos, setproceso] = useState([]);

const [usuario, setusuario] = useState();

const listaProcesos = (getProcesos) =>{
    setproceso(getProcesos)
}

const getUsuario = (usuario)=>{
  setusuario(usuario)
}

  return (
    <ContextoProcesos.Provider value={{ procesos, listaProcesos, usuario, getUsuario }}>
    {children}
    </ContextoProcesos.Provider>
        
     
    )
}
 
export {Proveedor, ContextoProcesos}
