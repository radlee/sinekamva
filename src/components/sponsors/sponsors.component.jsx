import React from 'react';
import { ListGroup, ListGroupItem, Media, Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';
import sf from '../../media/sinekamva.png';
import hh from '../../media/happy-hour.jpg'



const Sponsors = (props) => {
    return (
        <div className="container">
            <br />
            <h1 className="h1">Organizations</h1>
            <hr className="heading-horizon" />
            <br />
            <Container>
                <Row>
                    <Col sm="6">
                        <div>
                            <Card className="notice-sponsor">
                                <CardHeader> Organizations Websites </CardHeader>
                                <CardBody>
                                    <CardTitle>For Organizations in Action. </CardTitle>
                                    <CardText>
                                        Basic Start-Up Site
                                    </CardText>
                                </CardBody>
                                <CardFooter> Example: <a target="__blank" href="https://www.radlee.github.io/sinekamva"> Sinekamva Website</a></CardFooter>
                            </Card>
                        </div>
                    </Col>
                    <Col sm="6">
                        <ListGroup className="team" flush>
                            <ListGroupItem className="list-g">
                                <Media>
                                    <Media className="profile-pic" left>
                                        <Media className="Media" object src={hh} height="64px" alt="Sponsor Photo" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Happy Hour Foundation
                                        </Media>
                                        <h5>Community Based Organisation</h5>
                                        Soup Kitchen Every Tuesday at the community Library
                                    </Media>
                                </Media>
                            </ListGroupItem>
                            <ListGroupItem className="list-g">
                                <Media>
                                    <Media className="profile-pic" left>
                                        <Media className="Media" object src={sf} height="64px" alt="Sponsor Photo" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Sinekamva Foundation
                                        </Media>
                                        <h5>Youth Organisation</h5>
                                        Social Welfare based Organisation.
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