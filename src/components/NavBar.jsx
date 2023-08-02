import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DropdownMenu } from './index';
import { Form } from 'react-bootstrap';

export const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');
    const [showAlert, setShowAlert] = useState(false); // Estado para controlar la aparición de la alerta

    // Obtener el término de búsqueda de la URL y asignarlo al estado al cargar la página
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchTermFromURL = searchParams.get('search') || '';
        setSearchTerm(searchTermFromURL);
    }, [location]);

    const onLogout = () => {
        navigate('/login', {
            replace: true,
        });
    };

  const handleSearch = (e) => {
  e.preventDefault();
  // Aquí puedes realizar la lógica de búsqueda con el término ingresado (searchTerm)

  if (searchTerm.trim() !== '') {
    // Redirigir a la página de ProductList con el término de búsqueda
    navigate(`/product-list?search=${encodeURIComponent(searchTerm)}`);
    // Ocultar la alerta cuando se realiza una búsqueda válida
    setShowAlert(false);
  } else {
    // Mostrar alerta solo cuando se realiza una búsqueda activa en la página de ProductList
    setShowAlert(location.pathname === '/product-list');
  }
};

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <DropdownMenu />
            <Link className="navbar-brand" to="/">
                Logo
            </Link>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <Form onSubmit={handleSearch} className="form-inline my-2 my-lg-0">
                        <Form.Control
                            type="text"
                            placeholder="Buscar"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Form>

                    <span className="nav-item nav-link text-primary">Usuario</span>

                    <NavLink className="nav-item nav-link btn" to="/login" onClick={onLogout}>
                        Login
                    </NavLink>

                    <NavLink className="nav-item nav-link btn" to="/signup">
                        SignUp
                    </NavLink>
                </ul>
            </div>
            {/* Mostrar la alerta solo cuando showAlert es verdadero y el término de búsqueda esté vacío */}
            {showAlert && searchTerm.trim() === '' && (
                <div>No se encontraron resultados.</div>
            )}
        </nav>
    );
};