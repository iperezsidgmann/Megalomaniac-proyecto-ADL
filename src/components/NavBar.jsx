import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { discos } from '../data/discos';
import { DropdownMenu } from './index';
import { Form } from 'react-bootstrap';


export const Navbar = () => {
<<<<<<< HEAD
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
=======
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de búsqueda con el término ingresado (searchTerm)

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
        <li className="nav-item">
          {searchTerm.trim() !== '' && (
            <span className="nav-link text-primary">Usuario</span>
          )}
        </li>

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
      </ul>
    </nav>
  );
};

>>>>>>> e6ffba55e371fb5c8092c7b03b13a386910f4c08
