import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
// import { Row } from 'react-bootstrap';
import Signup from './components/Signup';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
