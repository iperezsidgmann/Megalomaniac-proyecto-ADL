import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { DropdownMenu } from './index';
import { Form } from 'react-bootstrap';


export const Navbar = () => {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    const handleSearch = (e) => {
        e.preventDefault();
        // Aquí puedes realizar la lógica de búsqueda con el término ingresado (searchTerm)
        setSearchTerm('');
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <DropdownMenu />
            <Link
                className="navbar-brand"
                to="/"
            >
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


                    <span className='nav-item nav-link text-primary'>
                        Usuario
                    </span>

                    <NavLink
                        className="nav-item nav-link btn"
                        to="/login"
                        onClick={onLogout}
                    >
                        Login
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link btn"
                        to="/signup"
                        // onClick={  }
                    >
                        SignUp
                    </NavLink>

                </ul>
            </div>
        </nav>
    )
}