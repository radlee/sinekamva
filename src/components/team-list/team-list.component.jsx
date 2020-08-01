import React from 'react';
import { ListGroup, ListGroupItem, Media } from 'reactstrap';
import lee from '../../media/lee.jpg';
import themba from '../../media/themba.jpg';
import siya from '../../media/siya.jpg';


const TeamList = (props) => {
    return (
        <div className="container">
            <br />
            <h1 className="h1">Directors</h1>
            <hr className="heading-horizon" />
            <br />
            <ListGroup className="team" flush>
                <ListGroupItem>
                    <Media>
                        <Media className="profile-pic" left>
                            <Media className="Media" object src={siya} height="64px" alt="Siya's Profile Photo" />
                        </Media>
                        <Media body>
                            <Media heading>
                                Tabata Siyasanga
                            </Media>
                            <h5>Director 1</h5>
                            Cape Town
                        </Media>
                    </Media>
                </ListGroupItem>
                <ListGroupItem>
                    <Media>
                        <Media className="profile-pic" left>
                            <Media className="Media" object src={themba} height="64px" alt="Themba's Profile Photo" />
                        </Media>
                        <Media body>
                            <Media heading>
                                Mekana Thembelihle
                            </Media>
                            <h5>Director 2</h5>
                            Cape Town
                        </Media>
                    </Media>
                </ListGroupItem>
                <ListGroupItem>
                    <Media>
                        <Media className="profile-pic" left>
                            <Media className="Media" object src={lee} height="64px" alt="Lolito's Profile Photo" />
                        </Media>
                        <Media body>
                            <Media heading>
                                Mafanga Lolitho
                            </Media>
                            <h5>Director 3</h5>
                            Cape Town
                        </Media>
                    </Media>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default TeamList;