import axios from "axios";
import React,  { useState,  useContext  }  from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ContextoProcesos } from "../context/ContextoProcesos";

const Login = () => {

  const { getUsuario } = useContext(ContextoProcesos);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const registrar = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data) {
        console.log("TRUE");
        getUsuario(response.data)
        navigate("/inicio"); // Navegar a la ruta
      } else {
        console.log("FALSE");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica de autenticación, por ejemplo, una solicitud a un servidor.
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <InputField
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={handleEmailChange}
        />
        <InputField
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
        />
        <SubmitButton onClick={registrar} type="submit">
          Iniciar sesión
        </SubmitButton>
      </LoginForm>
    </LoginContainer>
  );
};
// Estilos para el componente
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export default Login;
