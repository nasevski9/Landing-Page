import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logomk.png'

export default function NavBarMk() {
  
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
                      <Link to='/mk' className={currentPage === '/mk' ? 'nav-link active' : 'nav-link'}>Почетна</Link>
                      <Link to='/mk/how-to' className={currentPage === '/mk/how-to' || currentPage === '/mk/online-shop' || currentPage ==='/mk/local-shop' || currentPage === '/mk/egift-card' ? 'nav-link active' : 'nav-link'}>Упатства</Link>
                      <Link to='/mk/refer' className={currentPage === '/mk/refer' ? 'nav-link active' : 'nav-link'}>Препорачај</Link>
                      <Link to='/mk/owner' className={currentPage === '/mk/owner' ? 'nav-link active' : 'nav-link'}>Поседуваш Бизнис?</Link>
                      <Link to='/mk/media-box' className={currentPage === '/mk/media-box' ? 'nav-link active' : 'nav-link'}>Media Box</Link>
                      <Link to='/mk/opportunity' className={currentPage === '/mk/opportunity' ? 'nav-link active' : 'nav-link'}>Започни Бизнис</Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </>
    )
}