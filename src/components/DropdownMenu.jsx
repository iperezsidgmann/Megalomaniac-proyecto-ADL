import { AiOutlineMenu } from 'react-icons/ai';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

const navigationItems = [
    { title: 'Rock', path: '/rockpage' },
    { title: 'Pop', path: '/poppage' },
    { title: 'Folk', path: '/folkpage' },
    { title: 'Metal', path: '/metalpage' },
];

export const DropdownMenu = () => {
    const location = useLocation();

    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title={<AiOutlineMenu />}
                            menuVariant="dark"
                        >
                            {navigationItems.map((item, index) => (
                                <NavDropdown.Item key={index}>
                                    <NavLink
                                        className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                        to={item.path}
                                    >
                                        {item.title}
                                    </NavLink>
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
