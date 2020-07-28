import React from 'react';
import { ListGroup, ListGroupItem, Media } from 'reactstrap';
import sinekamvaLogo from '../../media/circles.png';


const TeamList = (props) => {
    return (
        <div className="container">
            <br />
            <h1 clasName="display-3">Directors</h1>
            <br />
            <ListGroup className="team" flush>
                <ListGroupItem tag="a" href="#">
                    <Media>
                        <Media left href="#">
                            <Media object src={sinekamvaLogo} height="64px" alt="Siya's Profile Photo" />
                        </Media>
                        <Media body>
                            <Media heading>
                                Mekana Thembelihle
                            </Media>
                            <h5>Director 1</h5>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et similique in magni necessitatibus repellendus a iure quasi, iusto obcaecati cupiditate, unde id repellat animi laudantium numquam beatae. Incidunt, consequatur
                        </Media>
                    </Media>
                </ListGroupItem>
                <ListGroupItem tag="a" href="#">
                    <Media>
                        <Media left href="#">
                            <Media object src={sinekamvaLogo} height="64px" alt="Themba's Profile Photo" />
                        </Media>
                        <Media body>
                            <Media heading>
                                Tabata Siyasanga
                            </Media>
                            <h5>Director 2</h5>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et similique in magni necessitatibus repellendus a iure quasi, iusto obcaecati cupiditate, unde id repellat animi laudantium numquam beatae. Incidunt, consequatur?
                        </Media>
                    </Media>
                </ListGroupItem>
                <ListGroupItem tag="a" href="#">
                    <Media>
                        <Media left href="#">
                            <Media object src={sinekamvaLogo} height="64px" alt="Lolito's Profile Photo" />
                        </Media>
                        <Media body>
                            <Media heading>
                                Mafanga Lolitho
                            </Media>
                            <h5>Director 3</h5>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et similique in magni necessitatibus repellendus a iure quasi, iusto obcaecati cupiditate, unde id repellat animi laudantium numquam beatae. Incidunt, consequatur?
                        </Media>
                    </Media>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default TeamList;