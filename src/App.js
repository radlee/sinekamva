import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
              <Route path={["/", "/landing"]} exact component={Landing} />
              {/* <Route exact path="/edit/:id" component={EditProject} />
              <Route exact path="/projects/:id" component={Project} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/create" component={Create} /> */}
              {/* <Route path="/user" component={CreateUser} /> */}
          </Switch>
          <br />
          <Notice />
          <br />
          <TeamList />
          <br />
          <Spinner />
          <br />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
