import { AiOutlineMenu } from 'react-icons/ai'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const DropdownMenu = () => {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title={<AiOutlineMenu />}
                            menuVariant="dark"
                        >
                            <NavDropdown.Item href="#action/3.1">Rock</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Pop</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Folk</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Metal</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}




