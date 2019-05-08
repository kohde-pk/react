import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import './Nav.css';

class NavbarInstance extends Component {
    render() {
        return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Brand href="/">ProKarma</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link className="mr-auto" href="/">Home</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link href="/Add">Add Content</Nav.Link>
                <Nav.Link href="/content">View Content</Nav.Link>
            {/* <NavDropdown title="View Content" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/content">Article</NavDropdown.Item>
                <NavDropdown.Item href="/content">Link</NavDropdown.Item>
                <NavDropdown.Item href="/content">Image</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default NavbarInstance;