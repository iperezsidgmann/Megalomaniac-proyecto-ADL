import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DropdownMenu } from './index';
import { Form } from 'react-bootstrap';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [showAlert, setShowAlert] = useState(false);

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

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <DropdownMenu />
      <Link className="navbar-brand" to="/">
        Logo
      </Link>

      <div className="d-flex align-items-center justify-content-center flex-grow-1"> {/* Cambio en la clase del contenedor */}
        {/* Dejar el espacio vacío en el centro */}
      </div>

      <ul className="navbar-nav">
        <Form onSubmit={handleSearch} className="form-inline my-2 my-lg-0">
          <Form.Control
            type="text"
            placeholder="Buscar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form>
      </ul>

      <ul className="navbar-nav ml-auto align-items-center"> {/* Alinear los elementos a la derecha y centrar verticalmente */}
        <li className="nav-item">
          <span className="nav-link text-primary">Usuario</span>
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

      {/* Mostrar la alerta solo cuando showAlert es verdadero y el término de búsqueda esté vacío */}
      {showAlert && searchTerm.trim() === '' && (
        <div>No se encontraron resultados.</div>
      )}
    </nav>
  );
};