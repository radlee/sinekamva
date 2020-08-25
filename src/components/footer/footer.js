import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


export default class Footer extends Component {

    render() {


        return (
           
                <div className="container">
                     <Container>
      
                        <Row>
                            <Col sm="4"></Col>
                            <Col sm="4">

                                <hr />

                                <div className="twelve columns">        
                                    <div class="widget">
                                        <h1 className="footer-text">ORIGIN2020</h1>
                                    </div>
                                </div>

                                <hr />
                                
                            </Col>
                            <Col sm="4"></Col>
                        </Row>
                        
                        </Container>
                    </div>
       
        );
      }
};