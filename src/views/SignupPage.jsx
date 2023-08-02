import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import 'animate.css';

export const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
      return;
    }

    setError(false);
    setIsRegistered(true);
    setTimeout(() => {
      setIsRegistered(false);
      setName('');
      setEmail('');
      setPassword('');

      navigate("/home");
    }, 1500);
  };

  return (
    <div className='col-md-6 mx-auto animate__animated animate__fadeIn'>
      <h1 className='mt-3'>SignUp</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Ingresa tu nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Ingresa tu email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Ingresa tu contraseña" />
        </Form.Group>

        <Button variant="primary btn-dark mb-3" type="submit">
          Registrarse
        </Button>

      </Form>

      {error
        ? <p className="error">Los datos ingresados no son válidos.</p>
        : null}

      {isRegistered
        ? <p className="success">¡Registro exitoso! Redirigiendo...</p>
        : null}
    </div>
  );
};
