import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const Naviagtion = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">React-Hooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/useState">useState</Nav.Link>
          <Nav.Link href="/useEffect">useEffect</Nav.Link>
          <Nav.Link href="/useEffect/datafetch">useEffect- data fetching</Nav.Link>
          <Nav.Link href="/useContext">useContext</Nav.Link>
          <Nav.Link href="/useReducer">useReducer</Nav.Link>
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
