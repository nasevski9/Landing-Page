import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logousa.png'

export default function NavBar() {
  
  const currentPage = useLocation().pathname;

    return (
        <>

                <Navbar collapseOnSelect expand="lg" className="justify-content-center navbar">
                <Container>
                <Navbar.Brand as={Link} to='/'>

                    <div className='nav-img'>
                        <img src={logo} alt='Logo' />
                    </div>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="toggle-this" className='navbar-dark' />
                <Navbar.Collapse id="toggle-this" className='justify-content-center' >
                    <Nav className="nav nav-pills">
                      <Link to='/usa' className={currentPage === '/usa' ? 'nav-link active' : 'nav-link'}>Home</Link>
                      <Link to='/usa/how-to' className={currentPage === '/usa/how-to' || currentPage === '/usa/online-shop' || currentPage ==='/usa/local-shop' || currentPage === '/usa/egift-card' ? 'nav-link active' : 'nav-link'}>How to Shop</Link>
                      <Link to='/usa/benefits' className={currentPage === '/usa/benefits' ? 'nav-link active' : 'nav-link'}>Benefits</Link>
                      <Link to='/usa/refer' className={currentPage === '/usa/refer' ? 'nav-link active' : 'nav-link'}>Refer & Earn</Link>
                      <Link to='/usa/owner' className={currentPage === '/usa/owner' ? 'nav-link active' : 'nav-link'}>Own a Business?</Link>
                      <Link to='/usa/opportunity' className={currentPage === '/usa/opportunity' ? 'nav-link active' : 'nav-link'}>Start a Business</Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </>
    )
}