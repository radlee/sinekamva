import React , { Component } from 'react';
import { Row, Col, Container, Card, CardBody, CardHeader, CardFooter, CardText, CardTitle } from 'reactstrap';

export default class Notice extends Component { 
   render () {
    return (

        <Container>
            <h1 className="h1">Projects</h1>
            <hr className="heading-horizon" />
            <br />
            <br />
            <Row>
                <Col sm="6">
                    <div>
                        <Card className="notice-one">
                            <CardHeader> Re-Introduction on Education </CardHeader>
                            <CardBody>
                                <CardTitle>OBJECTIVE : ENCOURAGE AND PROMOTE LITERACY</CardTitle>
                                <CardText>
                                    Our goal is to bring Education to the people.
                                </CardText>
                                <CardText>
                                    <em className="emphasis">"We beleive Education is the key to Success."</em>
                                </CardText>
                            </CardBody>
                            <CardFooter>Tutoring | Mentourship | Self Development</CardFooter>
                        </Card>
                    </div>
                </Col>

                <Col sm="6">
                    <div>
                        <Card className="notice-two">
                            <CardHeader> Sinekamva on Health </CardHeader>
                            <CardBody>
                                <CardTitle>Improve Quality of Life</CardTitle>
                                <CardText>
                                    Intervention.Improve Health Care Access. Our goal is to get health where is needed.
                                </CardText>
                                <CardText>
                                    <em className="emphasis">"With help from our collaborators we ensure that everyone has equal health care system"</em>
                                </CardText>
                            </CardBody>
                            <CardFooter>Social and Health Care</CardFooter>
                        </Card>
                    </div>
               
                </Col>
            </Row>
<br />
            <Row>
            <Col sm="6">
                    <div>
                        <Card className="notice-is">
                            <CardHeader> Information Systems </CardHeader>
                            <CardBody>
                                <CardTitle>SELF-AWARENESS | CONCIOUSNESS | KNOWLEDGE</CardTitle>
                                <CardText>
                                    <strong>By Increasing Participation of Youth within the Community.</strong>
                                </CardText>
                                <CardText>
                                    <em className="emphasis">The Youth is on the ground, where they can actually make a difference themselves.</em>
                                </CardText>
                            </CardBody>
                            <CardFooter>"Youth Empowerment"</CardFooter>
                        </Card>
                    </div>
               
                </Col>
                <br />
                <Col sm="6">
                    <div>
                        <Card className="notice-inno">
                            <CardHeader> Innovation </CardHeader>
                            <CardBody>
                                <CardTitle>Community Development</CardTitle>
                                <CardText>
                                    Organized field work around the community. Create Employment Opportunities. Addapt everyone to the new life-style.
                                </CardText>
                            </CardBody>
                            <CardFooter>Job Creation | Eliminating Poverty | Breaking Digital Devide </CardFooter>
                        </Card>
                    </div>
                </Col>

               
            </Row>
        </Container>
    )
   }
}