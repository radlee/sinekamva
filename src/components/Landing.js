import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class Landing extends Component {
    render() {
        return (
            <Jumbotron className="jumbotron">
                <h1 clasName="display-3">Sinekamva  Foundation</h1>
                <p className="lead">Social Welfare</p>
                <hr className="my-2" />
                <p>Providing a solution to an existing problem.</p>
                <p className="lead">
                    <Button color="primary">Connect</Button>
                </p>
            </Jumbotron>
        )
    }
}

export default Landing