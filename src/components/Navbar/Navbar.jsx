import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg'

export default function NavBar() {
  
  const currentPage = useLocation().pathname;

    return (
        <>

                <Navbar collapseOnSelect expand="lg" className="justify-content-center navbar">
                <Container>
                <Navbar.Brand>

                    <div className='nav-img'>
                        <img src={logo} alt='Logo' />
                    </div>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="toggle-this" className='navbar-dark' />
                <Navbar.Collapse id="toggle-this" className='justify-content-center' >
                    <Nav className="nav nav-pills">
                      <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                      <Link to='/how-to' className={currentPage === '/how-to' || currentPage === '/online-shop' || currentPage ==='/local-shop' || currentPage === '/egift-card' ? 'nav-link active' : 'nav-link'}>How to Shop</Link>
                      <Link to='/benefits' className={currentPage === '/benefits' ? 'nav-link active' : 'nav-link'}>Benefits</Link>
                      <Link to='/refer' className={currentPage === '/refer' ? 'nav-link active' : 'nav-link'}>Refer & Earn</Link>
                      <Link to='/opportunity' className={currentPage === '/opportunity' ? 'nav-link active' : 'nav-link'}>Grow a Business</Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </>
    )
}