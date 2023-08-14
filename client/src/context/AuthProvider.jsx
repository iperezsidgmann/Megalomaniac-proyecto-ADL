import { createContext, useState, useContext } from 'react';
import { fetchUsers } from '../data/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const handleLogin = async () => {

        try {
            const users = await fetchUsers(); // Llama a la función para obtener la lista de usuarios

            const existingUser = users.find(user => user.email === email && user.password === password);

            if (existingUser) {
                setIsLoggedIn(true);
                setError('');
            } else {
                setError('Credenciales de inicio de sesión incorrectas');
            }

        } catch (error) {
            setError('Error al realizar el inicio de sesión');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de campos
        if (!email.trim() || !password.trim()) {
            setError('Los datos ingresados no son válidos.');
            return;
        }

        setError(false);
        setIsRegistered(true);

        try {
            // Envía los datos del nuevo usuario al servidor para registrarlo en la base de datos
            await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
    
            // Simula una autenticación exitosa después de 1 segundo
            setTimeout(() => {
                setIsRegistered(false);
                setIsLoggedIn(true);
                setError('');
                setEmail('');
                setPassword('');
                handleLogin();
            }, 1500);
        } catch (error) {
            setError('Error al realizar el registro');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const authContextValue = {
        isLoggedIn,
        name,
        setName,
        error,
        email,
        setEmail,
        password,
        isRegistered,
        setIsRegistered,
        setPassword,
        handleSubmit,
        handleLogout,
        handleLogin,
    };

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error('useAuth debe utilizarse dentro de un AuthProvider');
    }
    return authContext;
};
