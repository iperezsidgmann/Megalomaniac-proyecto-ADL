import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DropdownMenu } from './index';
import { Form } from 'react-bootstrap';


export const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchTermFromURL = searchParams.get('search') || '';
        setSearchTerm(searchTermFromURL);
    }, [location]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== '') {
            navigate(`/product-list?search=${encodeURIComponent(searchTerm)}`);
            setShowAlert(false);
        } else {
            setShowAlert(location.pathname === '/product-list');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark p-1">
            <DropdownMenu />
            <Link className="navbar-brand" to="/">
                Logo
            </Link>

            <div className="navbar-collapse collapse flex-grow-1 order-3 justify-content-end ">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Form onSubmit={handleSearch} className="form-inline my-2 my-lg-0">
                            <Form.Control
                                type="text"
                                placeholder="Buscar"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </Form>
                    </li>

                    {/* Mostrar el nombre del usuario si está logueado */}
                    {isLoggedIn && (
                        <li className="nav-item">
                            <span className="nav-link text-primary">
                                Nombre del Usuario
                            </span>
                        </li>
                    )}

                    {/* Mostrar los enlaces "Login" y "SignUp" solo si el usuario no está logueado */}
                    {!isLoggedIn && (
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

                    {/* Mostrar el botón "Cerrar sesión" solo si el usuario está logueado */}
                    {isLoggedIn && (
                        <li className="nav-item">
                            <button className="nav-link btn" onClick={handleLogout}>
                                Cerrar sesión
                            </button>
                        </li>
                    )}
                </ul>
            </div>
            {showAlert && searchTerm.trim() === '' && (
                <div>No se encontraron resultados.</div>
            )}
        </nav>
    );
};
