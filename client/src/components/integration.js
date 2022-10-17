import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import picA from '../images/construction.jpg'

const Integration = () => {
    return (
        <>
            <Container id='construction'>
                <Row className='const1'>
                    <Col sm={12}>
                        <h2>Oooops! Sorry. This page is under construction.</h2>
                        <img src={picA} alt='Construction' />            
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Integration;