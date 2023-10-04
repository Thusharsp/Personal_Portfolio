import React from 'react';
import bckimg from '../../assets/bckimg.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css'

const Home = () => {
    return(
        <Container className='homepage'> 
        <Row>
            <Col className='textitems'>
           <p className='text'>Hi There!{" "} <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span></p>
            <p className='text2'>I'M <strong className="main-name"> THUSHAR S PAWAR </strong></p>
           </Col>
               <Col className='img'>  
           <img className='bckimg' src={bckimg} alt ="" ></img>      
           </Col>   
           </Row>                                     
        </Container>
    );
}
export default Home;