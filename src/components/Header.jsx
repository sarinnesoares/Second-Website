import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Logo from'../assets/Logo Wine AIT.png'

export function Header( props ) {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <img src={Logo} style={{ maxWidth: '65px'}} />
                    { props.text }</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/wines">Wines</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
                        <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}