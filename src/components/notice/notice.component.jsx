import React , { Component } from 'react';
import { Row, Col, Container, Card, CardBody, CardHeader, CardFooter, CardText, CardTitle } from 'reactstrap';

export default class Notice extends Component { 
   render () {
    return (

        <Container>
            <h1 clasName="display-3">Current Projects</h1>
            <br />
            <br />
            <Row>
                <Col   sm="6">
                <div>
                        <Card>
                            <CardHeader> Be The Helping Hand </CardHeader>
                            <CardBody>
                                <CardTitle>DONATIONS</CardTitle>
                                <CardText>
                                    This Project is aimed at making a difference with the litle we can share.
                                </CardText>
                            </CardBody>
                            <CardFooter>OCTOBER OBJECTIVE : Donate Food and Help</CardFooter>
                        </Card>
                    </div>
                </Col>

                <Col   sm="6">
                    <div>
                        <Card>
                            <CardHeader> Sinekamva on Health </CardHeader>
                            <CardBody>
                                <CardTitle>Improve Quality of Life</CardTitle>
                                <CardText>
                                    Intervention. Improve Health Care Access
                                </CardText>
                                <CardText>
                                    <em className="community">"NH1 Ensures that everyone has equal health care system"</em>
                                </CardText>
                            </CardBody>
                            <CardFooter>Social and Health Care</CardFooter>
                        </Card>
                    </div>
               
                </Col>
            </Row>
        </Container>
    )
   }
}