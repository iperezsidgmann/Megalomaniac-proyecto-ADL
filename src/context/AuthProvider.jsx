import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de campos
        if (!email.trim() || !password.trim()) {
            setError('Los datos ingresados no son válidos.');
            return;
        }

        // Simula una autenticación exitosa después de 1 segundo
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

    // Se proporcionan las variables y funciones necesarias en el valor del contexto
    const authContextValue = {
        isLoggedIn,
        error,
        email,
        setEmail, // Agregar setEmail al objeto authContextValue
        password,
        setPassword, // Agregar setPassword al objeto authContextValue
        handleSubmit,
        handleLogout,
    };

    // Retorna el proveedor con el contexto
    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error('useAuth debe utilizarse dentro de un AuthProvider');
    }
    return authContext;
};
