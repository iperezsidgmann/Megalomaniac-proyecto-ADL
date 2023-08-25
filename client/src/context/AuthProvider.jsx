import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [user, setUser] = useState();
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false); 

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
        setIsLoading(true); // Comenzar la carga

        try {
            const response = await fetch(action === 'register' ? 'http://localhost:3000/usuarios' : 'http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                const data = await response.json();

                if (action === 'register') {
                    setIsRegistered(true);
                    setName(data.name);
                } else {
                    setIsLoggedIn(true);
                    setName(data.name);
                }

                setEmail('');
                setPassword('');
                setError('');

            } else {
                setError('Credenciales de inicio de sesión incorrectas');
            }

        } catch (error) {
            setError('Error al realizar el registro o inicio de sesión');
        } finally {
            setIsLoading(false); // Finalizar la carga, ya sea con éxito o error
        }
    };

    const setIsLoggedInFalse = () => {
        setIsLoggedIn(false);
        setToken(null);
        setName(''); 
    };

    const handleLogout = () => {
        setIsLoggedInFalse();
    };

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3000/usuarios');
            if (!response.ok) {
                throw new Error('No se pudo obtener la lista de usuarios');
            }
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error('Error al obtener la lista de usuarios:', error);
        }
    };

    const authContextValue = {
        isLoggedIn,
        setIsLoggedIn,
        setIsLoggedInFalse,
        name,
        setName,
        error,
        email,
        setEmail,
        user,
        setUser,
        password,
        setPassword,
        isRegistered,
        setIsRegistered,
        token,
        handleSubmit,
        handleLogout,
        isLoading, // Agregar el estado de carga al contexto
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
