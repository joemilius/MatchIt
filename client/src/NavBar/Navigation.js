import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'

const Navigation = ({user, handleLogOut}) => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">MatchIt</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
              <Link to="/solo-game">SoloGame</Link>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              {!user
              ?
              <Button href="/login-form">Login</Button>
              :
              <Button onClick={handleLogOut}>Log Out</Button>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation
