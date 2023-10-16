import React, { useState } from 'react';
import styled from 'styled-components';


const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Aquí puedes agregar la lógica de registro de usuario, por ejemplo, enviar los datos al servidor.

    console.log('Email:', email);
    console.log('Password:', password);

    // Limpia los campos después de enviar el formulario
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <RegistrationFormWrapper>
      <h2>Registro de Usuario</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Email</Label>
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Correo electrónico"
          required
        />
        <Label>Contraseña</Label>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Contraseña"
          required
        />
        <Label>Confirmar Contraseña</Label>
        <Input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirmar contraseña"
          required
        />
        <Button type="submit">Registrarse</Button>
      </Form>
    </RegistrationFormWrapper>
  );
};

// Estilos para el formulario y los elementos
const RegistrationFormWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
export default RegistrationForm;
