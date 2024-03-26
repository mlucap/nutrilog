import React from 'react'
import { Nav, Navbar, NavbarText, NavbarBrand, Container, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "../css/Navigation.scss";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand>
          <Link id="title" to="/">Nutrilog</Link>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Link className="navLink" to='/dashboard'>Dashboard</Link>
            <Link className="navLink enditem" to="/login">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;