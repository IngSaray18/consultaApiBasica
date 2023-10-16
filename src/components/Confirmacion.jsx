import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { ContextoProcesos } from "../context/ContextoProcesos";
import axios from "axios";
import Modular from "./Modular";
function ConfirmationPage() {
  const { procesos } = useContext(ContextoProcesos);

  useEffect(() => {}, []);
  let endpoint = "";
  let nombreProceso = "";

  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const handleStartProcess = async () => {
    setOpen(true);

    console.log(procesos);
    if (procesos.includes("RESPALDO VENTANILLA")) {
      nombreProceso = "Respaldo Ventanilla";
      endpoint = "backup/backup-databaseVentanillaWeb";
    } else if (procesos.includes("BATCH VENTANILLA")) {
      nombreProceso = "Batch Ventanilla";
      endpoint = "ejecutar/ejecutar-code";
    } else if (procesos.includes("RESPALDO  BD Seguridad")) {
      nombreProceso = "Respaldo BD_Seguridad";
      endpoint = "backup/backup-databaseBDSeg";
    } else if (procesos.includes("RESPALDO CAJAAHORRO")) {
      nombreProceso = "Respaldo RESPALDO CAJAAHORRO";
      endpoint = "backup/backup-databaseCajaAhorro";
    } else if (procesos.includes("RESPALDO CAJAAHORROT")) {
      nombreProceso = "Respaldo RESPALDO CAJAAHORRO T";
      endpoint = "backup/backup-databaseCajaAhorroT";
    }

    try {
      setLoading(true); // Activar el loader
      // Hacer la solicitud GET al servidor
      const response = await axios.get(`http://localhost:3000/${endpoint}`);

      // Manejar la respuesta exitosa aquí
      console.log(response.data);
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al hacer la solicitud:", error);
    } finally {
      setLoading(false); // Desactivar el loader después de la solicitud
    }
  };

  const handleBack = () => {
    history.back();
  };

  return (
    <Container>
      {open ? (
        <Modular loader={loading} nombreProceso={nombreProceso} open={open} />
      ) : (
        <ul>
          {procesos.map((proceso, index) => {
            return <li key={index}>{proceso}</li>;
          })}
        </ul>
      )}

      <ButtonContainer>
        <Button secondary onClick={handleBack}>
          Regresar
        </Button>
        <Button onClick={handleStartProcess}>Comenzar proceso</Button>
      </ButtonContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.secondary ? "#ccc" : "#007bff")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export default ConfirmationPage;
