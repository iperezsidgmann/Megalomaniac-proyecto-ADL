// import { AiOutlineMenu } from 'react-icons/ai'
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom'

// export const DropdownMenu = () => {
//     return (
//         <Navbar variant="dark" bg="dark" expand="lg">
//             <Container fluid>
//                 <Navbar.Toggle aria-controls="navbar-dark-example" />
//                 <Navbar.Collapse id="navbar-dark-example">
//                     <Nav>
//                         <NavDropdown id="nav-dropdown-dark-example" title={<AiOutlineMenu />} menuVariant="dark">

//                          <li>
//                             <NavLink className={({isActive})=> isActive ? 'activo' : 'noactivo'} aria-current="page" to="rockpage">Rock</NavLink>
//                          </li>
//                          <li>
//                             <NavLink className={({isActive})=> isActive ? 'activo' : 'noactivo'}  to="poppage">Pop</NavLink>
//                         </li>
//                         <li>
//                             <NavLink className={({isActive})=> isActive ? 'activo' : 'noactivo'}  to="folkpage">Folk</NavLink>
//                         </li>
//                         <li>
//                             <NavLink className={({isActive})=> isActive ? 'activo' : 'noactivo'}  to="metalpage">Metal</NavLink>
//                         </li>


//                         </NavDropdown>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

import { AiOutlineMenu } from 'react-icons/ai';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const navigationItems = [
    { title: 'Rock', path: '/rockpage' },
    { title: 'Pop', path: '/poppage' },
    { title: 'Folk', path: '/folkpage' },
    { title: 'Metal', path: '/metalpage' },
];

export const DropdownMenu = () => {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Toggle as="span" aria-controls="navbar-dark-example">
                    <AiOutlineMenu />
                </Navbar.Toggle>
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Menu"
                            menuVariant="dark"
                        >
                            {navigationItems.map((item, index) => (
                                <NavDropdown.Item key={index}>
                                    <NavLink
                                        className={({ isActive }) => (isActive ? 'activo' : 'noactivo')}
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



