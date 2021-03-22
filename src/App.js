import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MiddleSection from './components/middle-section/MiddleSection';
import LeftSection from './components/left-section/LeftSection';


function App() {
  return (
    <div className="App">
      <Container>
      <Row>
        <Col><LeftSection /></Col>
        <Col xs={6}> <MiddleSection/> </Col>
        <Col> Right Section </Col>
      </Row>
      </Container>
      
    </div>
  );
}

export default App;
