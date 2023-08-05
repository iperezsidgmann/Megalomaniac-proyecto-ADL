import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DropdownMenu } from './index';
import { Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthProvider';


export const Navbar = () => {
    const { isLoggedIn, handleLogout, name } = useAuth(); // Consumir el contexto de autenticación

    const navigate = useNavigate();
    const location = useLocation();
    
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchTerm.trim() !== '') {
            // Redirigir a la página de ProductList con el término de búsqueda
            navigate(`/product-list?search=${encodeURIComponent(searchTerm)}`);
        } else {
            // Mostrar la alerta solo cuando se realiza una búsqueda con texto
            alert('La página o producto que buscas no existe :( ');
        }
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchTermFromURL = searchParams.get('search') || '';
        setSearchTerm(searchTermFromURL);
    }, [location]);

    // Condición para ocultar la barra de navegación en las páginas de Login y Signup
    if (location.pathname === '/login' || location.pathname === '/signup') {
        return null;
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <DropdownMenu />
            <Link className="navbar-brand" to="/">
                Logo
            </Link>

            <div className="d-flex align-items-center justify-content-center flex-grow-1">
                {/* Dejar el espacio vacío en el centro */}
            </div>

            <Form onSubmit={handleSearch} className="form-inline my-2 my-lg-0">
                <Form.Control
                    type="text"
                    placeholder="Buscar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Form>

            <ul className="navbar-nav ml-auto align-items-center">
                {isLoggedIn ? (
                    <>
                        <li className="nav-item">
                            <span className="nav-link text-primary">
                                {name || "Usuario"}
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link btn" onClick={handleLogout}>
                                Logout
                            </span>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link btn" to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn" to="/signup">
                                SignUp
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

