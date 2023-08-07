import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de campos
        if (!email.trim() || !password.trim()) {
            setError('Los datos ingresados no son válidos.');
            return;
        }

        setError(false);
        setIsRegistered(true);

        // Simula una autenticación exitosa después de 1 segundo
        setTimeout(() => {
            setIsRegistered(false);
            setIsLoggedIn(true);
            setError('');
            setEmail('');
            setPassword('');

        }, 1500);
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
