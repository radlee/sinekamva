import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer/footer';
import Notice from './components/notice/notice.component';
import Spinner from './components/spinner/spinner.component';
import TeamList from './components/team-list/team-list.component';
import './App.css';

import Navigation from "./components/Navigation"
import Landing from "./components/Landing"
import Create from "./components/Create";

// Version 2

// import Login from "./components/Login"
// import Register from "./components/Register"
// import Profile from "./components/Profile"
// import ProjectsList  from "./components/projects-list.component";
// import Project from "./components/project.component";
// import EditProject from "./components/edit-project.component";
// import CreateUser from "./components/create-user.component";
import { Jumbotron, Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Navigation />
          <Jumbotron className="jumbotron">
              <h1 clasName="display-3">Sinekamva  Foundation</h1>
              <p className="lead">Social Welfare</p>
              <hr className="my-2" />
              <p>Providing a solution to an existing problem.</p>
              <p className="lead">
                  <Button color="primary">Connect</Button>
              </p>
          </Jumbotron>
          <br />
          <Notice />
          <br />
          <TeamList />
          <br />
          <Spinner />
          <br />
          <Footer />
        </div>
    );
  }
}

export default App;
