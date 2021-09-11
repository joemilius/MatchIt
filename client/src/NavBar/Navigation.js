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
            <Nav.Link className="navbarclicks">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link className="navbarclicks">
              <Link to="/solo-game">SoloGame</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/vs-game">Vs Game</Link>
            </Nav.Link>
            </Nav>
              {!user
              ?
              <Button className="ms-auto" href="/login-form">Login</Button>
              :
              <Button className="ms-auto" onClick={handleLogOut}>Log Out</Button>
              }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation
