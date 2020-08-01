import React from 'react';
import { ListGroup, ListGroupItem, Media, Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';
import sp from '../../media/bsponsor.png';



const Sponsors = (props) => {
    return (
        <div className="container">
            <br />
            <h1 className="h1">Sponsors</h1>
            <hr className="heading-horizon" />
            <br />
            <Container>
                <Row>
                    <Col sm="6">
                        <div>
                            <Card className="notice-sponsor">
                                <CardHeader>Support a Project </CardHeader>
                                <CardBody>
                                    <CardTitle>Become a Sponsor</CardTitle>
                                    <CardText>
                                      If you would like to support one or more of our projects or become a partner please contact us.
                                    </CardText>
                                </CardBody>
                                <CardFooter>Make The Connect</CardFooter>
                            </Card>
                        </div>
                    </Col>
                    <Col sm="6">
                        <ListGroup className="team" flush>
                            <ListGroupItem className="list-g">
                                <Media>
                                    <Media className="profile-pic" left>
                                        <Media className="Media" object src={sp} height="64px" alt="Sponsor Photo" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Sponsor 1
                                        </Media>
                                        <h5>Project 2</h5>
                                        Project Category 2
                                    </Media>
                                </Media>
                            </ListGroupItem>
                            <ListGroupItem className="list-g">
                                <Media>
                                    <Media className="profile-pic" left>
                                        <Media className="Media" object src={sp} height="64px" alt="Sponsor Photo" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Sponsor 2
                                        </Media>
                                        <h5>Project 2</h5>
                                       Project Category 2
                                    </Media>
                                </Media>
                            </ListGroupItem>
                            <ListGroupItem className="list-g">
                                <Media>
                                    <Media className="profile-pic" left>
                                        <Media className="Media" object src={sp} height="64px" alt="Sponsor Photo" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Sponsor 3
                                        </Media>
                                        <h5>Project 2</h5>
                                        Project Category 2
                                    </Media>
                                </Media>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Sponsors;