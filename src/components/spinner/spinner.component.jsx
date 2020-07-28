import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import sinekamvaLogo from '../../media/circles.png';

export default class Spinner extends Component {
   render () {
       return (
                <Container>
            
                    <Row>
                    <Col sm="4"></Col>
                    <Col xs="12" sm="4">

                    <img src={sinekamvaLogo} className="App-logo" alt="logo" />

                    </Col>
                    <Col sm="4"></Col>
                    </Row>
                
                </Container>
       )
   }
}