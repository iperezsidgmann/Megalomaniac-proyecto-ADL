import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Lógica de autenticación
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de campos
        if (!email.trim() || !password.trim()) {
            setError('Los datos ingresados no son válidos.');
            return;
        }

        setTimeout(() => {
            setIsLoggedIn(true);
            setError('');
            setEmail('');
            setPassword('');
        }, 1000);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    if (isLoggedIn) {
        return (
            <div className='col-md-6 mx-auto'>
                <h1 className='mt-3'>Bienvenido!</h1>

                {/* Insertar componente Perfil */}

                <Button variant='primary btn-dark mb-3' onClick={handleLogout}>
                    Cerrar sesión
                </Button>
            </div>
        );
    }

    return (
        <div className='col-md-6 mx-auto'>
            <h1 className='mt-3'>Login</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Ingresa tu email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Ingresa tu contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant='primary btn-dark mb-3' type='submit'>
                    Enviar
                </Button>
            </Form>

            {error ? <p className='error'>{error}</p> : null}
        </div>
    );
};
