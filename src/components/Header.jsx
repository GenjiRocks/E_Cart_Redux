import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="w-100">
      <Container>
        <Navbar.Brand href="#home"><FontAwesomeIcon icon={faCartShopping} bounce className='me-3' />E-Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded me-5 mt-2' ><Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon icon={faHeart} style={{color: "#ff3d3d",}} /> Wishlist</Link></Nav.Link>
            <Nav.Link className='btn border rounded me-5 mt-2' ><Link to={'/cart'}  style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon icon={faCartShopping} style={{color: "#FFD43B",}} /> Cart</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header