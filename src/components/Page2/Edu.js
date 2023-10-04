import  React from 'react';
import './edu.css';
import { Col, Container, Row } from 'react-bootstrap';
import Type from '../Typewritter/Type';

const Edu = () => {
    return(
        <Container className='wrap'>
            <p className='info'>LET ME INTRODUCE MYSELF</p>
        <Row>
            <Col className='wrapper'>
                <div className='static-text'>I'm a </div>
                <Type />
            </Col>
        </Row>
        </Container>
    )
}
export default Edu;