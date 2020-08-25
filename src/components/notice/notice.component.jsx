import React , { Component } from 'react';
import { Row, Col, Container, Card, CardBody, CardHeader, CardFooter, CardText, CardTitle } from 'reactstrap';

export default class Notice extends Component { 
   render () {
    return (

        <Container>
            <h1 className="h1">The Objectives</h1>
            <hr className="heading-horizon" />
            <br />
            <br />
            <Row>
                <Col sm="6">
                    <div>
                        <Card className="notice-one">
                            <CardHeader> REACT Web and Mobile Applications </CardHeader>
                            <CardBody>
                                <CardTitle>FOCUSED AND ORGANIZED DEVELOPMENT</CardTitle>
                                <CardText>
                                    People-Centric-Concepts. That's our Philosophy.
                                </CardText>
                                <CardText>
                                    <em className="emphasis">"Solving people's problems with Technology"</em>
                                </CardText>
                            </CardBody>
                            <CardFooter>Proffessional. Business. Educational.</CardFooter>
                        </Card>
                    </div>
                </Col>

                <Col sm="6">
                    <div>
                        <Card className="notice-two">
                            <CardHeader> Collaboration </CardHeader>
                            <CardBody>
                                <CardTitle>THE OBJECTIVE: Joining workforce with innovative creators to solve problems. By Creators For Creators</CardTitle>
                                <CardText>
                                    <em className="emphasis">"Build a Revolution. Build a Legacy. Build a Life Style."</em>
                                </CardText>
                            </CardBody>
                            <CardFooter>Artists. Bloggers. Writers. Designers. Musicians and Podcasters</CardFooter>
                        </Card>
                    </div>
               
                </Col>
            </Row>
        </Container>
    )
   }
}