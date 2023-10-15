import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const MyHeader = () => {
  return (
    <>

      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/introduce">Introduce</Nav.Link>
            <Nav.Link href="/">Pricing</Nav.Link>
          </Nav>

          <Nav>
            <Button href="/login" variant="danger" onClick={() => console.log('Login clicked')}>
              Log-In
            </Button>
            <Button href="/new" variant="success">
              모집글작성
            </Button>
          </Nav>

        </Container>
      </Navbar>


    </>
  );
}

export default MyHeader;
