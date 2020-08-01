import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class Landing extends Component {
    render() {
        return (
            <Jumbotron className="jumbotron">
                <h1 clasName="display-3">Sinekamva  Foundation</h1>
                <p className="lead">Our Organizational Objectives are linked to the problems and contributing towards Solutions</p>
                <hr className="my-2" />
                <p>We Act uppon these Objectives to provide Solutions </p>
                <p className="lead">
                    <Button color="info">Connect</Button>
                </p>
            </Jumbotron>
        )
    }
}

export default Landing