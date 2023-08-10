import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Form, NavDropdown } from 'react-bootstrap';
import { useAuth } from '../context/AuthProvider';
import { DropdownMenu } from './index'; 
import logo3 from '../../assets/img/logo/logo3.png'

export const Navbar = () => {
    const { isLoggedIn, name, isRegistered } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
    
        if (searchTerm.trim() !== '') {
            navigate(`/product-list?search=${encodeURIComponent(searchTerm)}`);
            setSearchTerm(''); // Limpiar el término de búsqueda después de realizar la búsqueda
        } else {
            navigate(`/product-list`); // Redirigir a la lista completa sin ningún término de búsqueda
        }
    };
        
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchTermFromURL = searchParams.get('search') || '';
        setSearchTerm(searchTermFromURL);
    }, [location.search]);

    if (location.pathname === '/login' || location.pathname === '/signup') {
        return null;
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 sticky-top">
            <DropdownMenu /> 
            <Link className="navbar-brand" to="/">
                <img src={logo3} alt="Logo" style={{ width: '30%', height: 'auto' }} />
            </Link>

            <div className="d-flex align-items-center justify-content-center flex-grow-1">
                {/* Espacio vacío en el centro */}
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
                {(isLoggedIn || isRegistered) ? (
                    <>
                        <li className="nav-item">
                            <NavDropdown id="dropdown-user" menuVariant="dark" title={name || "Usuario"}>
                                <NavLink className="dropdown-item" to="/mis-discos">
                                    Mis discos
                                </NavLink>
                                <NavLink className="dropdown-item" to="/agregar-disco">
                                    Agregar disco
                                </NavLink>
                                <NavLink className="dropdown-item" to="/favoritos">
                                    Favoritos
                                </NavLink>
                            </NavDropdown>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link btn">
                                Logout
                            </Link>
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
