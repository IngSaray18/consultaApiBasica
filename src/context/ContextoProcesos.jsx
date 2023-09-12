import React, { useState } from 'react'

const ContextoProcesos = React.createContext();

const Proveedor = ({children}) => {  
const [procesos, setproceso] = useState([]);


const listaProcesos = (getProcesos) =>{
    setproceso(getProcesos)
}
  return (
    <ContextoProcesos.Provider value={{ procesos, listaProcesos }}>
    {children}
    </ContextoProcesos.Provider>
        
     
    )
}
 
export {Proveedor, ContextoProcesos}
