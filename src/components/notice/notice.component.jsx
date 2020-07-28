import React , { Component } from 'react';
import { Row, Col, Container, Card, CardBody, CardHeader, CardFooter, CardText, CardTitle } from 'reactstrap';

export default class Notice extends Component { 
   render () {
    return (

        <Container>
            <h1 clasName="display-3">Projects</h1>
            <br />
            <br />
            <Row>
                <Col sm="6">
                    <div>
                        <Card>
                            <CardHeader> Education </CardHeader>
                            <CardBody>
                                <CardTitle>OBJECTIVE - ENCOURAGE LITERACY</CardTitle>
                                <CardText>
                                    Connecting the Leaner/Student to the Teacher
                                </CardText>
                            </CardBody>
                            <CardFooter>Tutoring | Mentourship</CardFooter>
                        </Card>
                    </div>
                </Col>

                <Col sm="6">
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