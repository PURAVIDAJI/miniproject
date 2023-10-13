import React from 'react'
import {Navbar, Nav, Container, Button} from 'react-bootstrap';

const Header = () => {
  return (
    <header>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand >VOLUNTEERNOW</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className='me-auto'>
            <Nav.Link href="#home">소개</Nav.Link>
            <Nav.Link href="#link">크라우드 펀딩</Nav.Link>
            <Nav.Link href="#link">게시판</Nav.Link>
        </Nav>

          <Nav className='ml-auto'>
            <Nav.Link>
                <Button varient ='primary'>Log In</Button>
            </Nav.Link>
            <Nav.Link>
                <Button variant='secondary'>Sign up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header;