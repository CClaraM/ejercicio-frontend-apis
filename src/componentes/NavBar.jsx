import { Link } from "react-router-dom"
import { Container, Navbar, Nav} from 'react-bootstrap';

// <Nav.Link as={Link} to="/">Inicio</Nav.Link>
export default function Navigation() {
    return (
        
        

        <Navbar bg="dark" variant="dark" className="" >
            <Container fluid className="flex-column align-items-start">
                <Navbar.Brand id="basic-navbar-nav">
                    Menu
                </Navbar.Brand>
                <Nav className="flex-column" >
                    <Nav.Link as={Link} to="/">Api Productos</Nav.Link>
                    <Nav.Link as={Link} to="/api1">Api Usuarios</Nav.Link>
                </Nav>
            </Container>
        </Navbar>


        
    )
}