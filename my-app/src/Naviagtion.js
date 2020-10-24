import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const Naviagtion = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">React-Hooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="useState" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/useState">Example 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/useState/hookCounter">Example 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Example 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Example 4</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="useEffect" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Example 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Example 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Example 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Example 4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/useState">useContext</Nav.Link>
            <Nav.Link href="#pricing">useReducer</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#pricing">useMemo</Nav.Link>
            <Nav.Link href="#pricing">useRef</Nav.Link>
            <Nav.Link href="#pricing">Custom Hooks</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default  Naviagtion
