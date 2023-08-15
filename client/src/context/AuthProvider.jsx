import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSubmit = async (e, action) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            setError('Los datos ingresados no son válidos.');
            return;
        }

        setError(false);
        setIsRegistered(action === 'register');

        try {
            const response = await fetch(action === 'register' ? 'http://localhost:3000/register' : 'http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                setIsLoggedIn(true);
                setEmail('');
                setPassword('');
                setError('');
            } else {
                setError('Credenciales de inicio de sesión incorrectas');
            }

            setIsRegistered(false);
        } catch (error) {
            setError('Error al realizar el registro o inicio de sesión');
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
    };

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3000/usuarios');
            if (!response.ok) {
                throw new Error('No se pudo obtener la lista de usuarios');
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error al obtener la lista de usuarios:', error);
        }
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
