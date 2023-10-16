import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ContextoProcesos } from '../context/ContextoProcesos';
import { NavLink } from 'react-router-dom';
import axios from "axios";


const optionNames = [
  'DOMICILIADOS',
  'VENTANILLA ',
  'RESPALDO VENTANILLA',
  'RESPALDO  BD Seguridad',
  'BATCH VENTANILLA',
  'RUTEO  2',
  'CONSOLA.TXT',
  'RESPALDO CAJAAHORRO',
  'RESPALDO CAJAAHORROT',
  'BATCH NORMAL FIN DE DIA'
];



function Inicio() {
  const [options, setOptions] = useState(
    optionNames.reduce((acc, option) => {
      acc[option] = false;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (option) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  const handleConfirm = () => {
    const selectedOptions = optionNames.filter((option) => options[option]);
    //console.log('Selected Options:', selectedOptions);
    listaProcesos(selectedOptions)
  };

  const handleCancel = () => {
    setOptions(
      optionNames.reduce((acc, option) => {
        acc[option] = false;
        return acc;
      }, {})
    );
  };

  const handleLogout = async () => {
    
    try {
      const response = await axios.get(`http://localhost:4000/user`);

      // Manejar la respuesta exitosa aquí
      console.log(response);
      }catch (error) {
        console.error("Error:", error);
      }

    console.log('Logging out...');
  };

  const {usuario} = useContext(ContextoProcesos)

  const {listaProcesos} = useContext(ContextoProcesos)

  useEffect(() => {
    
  
    console.log(usuario);
      
    
  }, []);

  return (
    <Container>
      <h1>Sistema de fin de día</h1>
      <CheckboxContainer>
        {optionNames.map((option) => (
          <CheckboxLabel key={option}>
            <input
              type="checkbox"
              checked={options[option]}
              onChange={() => handleCheckboxChange(option)}
            />
            {option}
          </CheckboxLabel>
        ))}
      </CheckboxContainer>
      <ButtonContainer>
        <Button secondary onClick={handleCancel}>
          Cancelar
        </Button>
        <NavLink to={'/Confirmacion'}>
        <Button onClick={handleConfirm}>Confirmar</Button>
        </NavLink>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
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

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const CheckboxLabel = styled.label`
  margin-bottom: 8px;
`;
const LogoutButton = styled.button`
padding: 10px 20px;
background-color: #ff0000; /* Red color for logout button */
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
  
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.secondary ? '#ccc' : '#007bff')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export default Inicio;
