import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socketServer1 = io('http://localhost:3000');
const socketServer2 = io('http://localhost:4000');

function App() {
  const [comando, setComando] = useState('');
  const [resultadoServer1, setResultadoServer1] = useState('');
  const [resultadoServer2, setResultadoServer2] = useState('');

  useEffect(() => {
    socketServer1.on('resultado', (data) => {
      setResultadoServer1(data.stdout || data.stderr || 'No se recibió ninguna salida.');
    });

    socketServer2.on('resultado', (data) => {
      setResultadoServer2(data.stdout || data.stderr || 'No se recibió ninguna salida.');
    });

    return () => {
      socketServer1.off('resultado');
      socketServer2.off('resultado');
    };
  }, []);

  const ejecutarComandoServer1 = () => {
    socketServer1.emit('ejecutar-comando', comando);
  };

  const ejecutarComandoServer2 = () => {
    socketServer2.emit('ejecutar-comando', comando);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe un comando"
        value={comando}
        onChange={(e) => setComando(e.target.value)}
      />
      <button onClick={ejecutarComandoServer1}>Ejecutar Comando en Servidor 1</button>
      <pre>{resultadoServer1}</pre>
      <button onClick={ejecutarComandoServer2}>Ejecutar Comando en Servidor 2</button>
      <pre>{resultadoServer2}</pre>
    </div>
  );
}

export default App;
