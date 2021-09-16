import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'


const Navigation = ({user, showSignUp, setShowSignUp, handleLogOut}) => {
    return (
        <Navbar className="navbar" bg="light" expand="lg" variant='light'>
        <Container>
          <Navbar.Brand>
            <NavLink className="navlinks" to="/"><h2 className="brand-text">MatchIt</h2></NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link className="navbarclicks" >
              <NavLink className="navlinks" to="/"><h5 className="nav-text">Home</h5></NavLink>
            </Nav.Link>
            <Nav.Link className="navbarclicks">
              <NavLink className="navlinks" to="/solo-game"><h5 className="nav-text">SoloGame</h5></NavLink>
            </Nav.Link>
            <Nav.Link>
              <Link className="navlinks" to="/vs-game"><h5 className="nav-text">Vs Game</h5></Link>
            </Nav.Link>
            </Nav>
            <style type="text/css">
              {`
              .btn-flat {
                background-color: #66CDAA;
                color: #FFFAFA;
              }
              .btn-flat:hover {
                background-color: #CD853F;
                color: #66CDAA
                border: .2em solid #66CDAA;
              }
              
              `}
            </style>
              {!user
              ?
              <Button className="ms-auto" variant="flat" to="/login-form" onClick={() => setShowSignUp(false)}>Login</Button>
              :
              <Button className="ms-auto" variant="flat" onClick={handleLogOut}>Log Out</Button>
              }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation
