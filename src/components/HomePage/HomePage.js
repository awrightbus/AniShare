import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSection from './left-section/LeftSection';
import RightSection from './right-section/RightSection';
import MiddleSection from './middle-section/MiddleSection';
// import LeftSection from './components/left-section/LeftSection';
// import RightSection from './components/HomePage/right-section/RightSection';

function HomePage() {
    return (
        <div>
            <Container>
                <Row>
                <Col><LeftSection /></Col>
                <Col xs={7}> <MiddleSection/> </Col>
                <Col> <RightSection/> </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage
