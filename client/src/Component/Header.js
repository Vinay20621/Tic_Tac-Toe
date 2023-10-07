import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom'

function Header() {
    const navigate=useNavigate()
    function logOut()
	{
        localStorage. removeItem('token')
		return navigate('/')
	}
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Tic-Tac-Toe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
        </Navbar.Collapse>

      </Container>
		<button type="button" className="btn btn-primary me-3" onClick={logOut}>LogOut</button>
    </Navbar>
  );
}

export default Header;