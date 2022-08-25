import logo from './assets/lamaprita.png';
import letters from './assets/letritas.png';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div>
      <Navbar className='Navbar' >
        <Container>
          <Navbar.Brand>
            <img src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="LabPro logo" />
            <img src={letters}
              height="30"
              className="d-inline-block align-center"
              alt="LabPro letritas"/>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
