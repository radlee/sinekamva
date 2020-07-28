import React , { Component } from "react";
import ProjectDataService  from "../services/project.service";

export default class Project extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDonaion = this.onChangeDonation.bind(this);
        this.getProject = this.getProject.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateProject = this.updateProject.bind(this);
        this.deleteProject = this.deleteProject.bind(this);

        this.state = {
            currentProject : {
                id: null,
                username: "",
                projectname: "",
                description: "",
                donation: "",
                published: false
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getProject(this.props.match.params.id);
    }

    onChangeUsername(e) {

        const username = e.target.value;

        this.setState(function(prevState) {
            return {
                currentProject: {
                    ...prevState.currentProject,
                    username: username
                }
            };
        });
    }

    onChangeProjectName(e) {

        const projectname = e.target.value;

        this.setState(function(prevState) {
            return {
                currentProject: {
                    ...prevState.currentProject,
                    projectname: projectname
                }
            };
        });
    }

    onChangeDescription(e) {

        const description = e.target.value;

        this.setState(function(prevState) {
            return {
                currentProject: {
                    ...prevState.currentProject,
                    description: description
                }
            };
        });
    }

    onChangeDonation(e) {

        const donation = e.target.value;

        this.setState(function(prevState) {
            return {
                currentProject: {
                    ...prevState.currentProject,
                    donation: donation
                }
            };
        });
    }

    getProject(id) {
        ProjectDataService.get(id)
        .then(response => {
          this.setState({
              currentProject: response.data
          });
          console.log(response.data)    
        })
        .catch(e => {
            console.log(e)
        });
    }

    updatePublished(status) {
        var data = {
            id: this.state.currentProject.id,
            username: this.state.currentProject.username,
            projectname: this.state.currentProject.projectname,
            description: this.state.currentProject.description,
            published: status
        };

        ProjectDataService.update(this.state.currentProject.id, data)
        .then(response => {
            this.setState(prevState => ({
                currentProject: {
                    ...prevState.currentProject,
                    published: status
                }
            }));
            console.log(response.data);
        })
        .catch(e => {
            console.log(e)
        });
    }

    updateProject() {
        ProjectDataService.update(
            this.state.currentProject.id,
            this.state.currentProject
        )
        .then(response => {
            console.log(response.data);
            this.setState({
                message: "The Project was successfully updated!"
            });
        })
        .catch(e => {
            console.log(e)
        });
    }

    deleteProject() {
        ProjectDataService.delete(this.state.currentProject.id)
        .then(response => {
            console.log(response.data);
            this.props.history.push('/projects')
        })
        .catch(e => {
            console.log(e)
        });
    }
    
    render() {
        const { currentProject } = this.state;
        return (
            <div>
                {currentProject ? (
                    <div className="edit-form">

                        <h4>Project</h4>

                        <form>

                            <div className="form-group">
                                <label htmlfor="username">User Name</label>
                                <input 
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        value={currentProject.username}
                                        onChange={this.onChangeUsername}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlfor="projectname">Project Name</label>
                                <input 
                                        type="text"
                                        className="form-control"
                                        id="projectname"
                                        value={currentProject.projectname}
                                        onChange={this.onChangeProjectName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlfor="description">Description</label>
                                <input 
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        value={currentProject.description}
                                        onChange={this.onChangeDescription}
                                />
                            <div className="form-group">
                                <label htmlfor="donation">Donation</label>
                                <input 
                                        type="text"
                                        className="form-control"
                                        id="donation"
                                        value={currentProject.donation}
                                        onChange={this.onChangeDonation}
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    <strong>Status</strong>
                                </label>
                                {currentProject.published ? "Published" : "Pending"}
                            </div>
                        </div>
                        </form>
                        {currentProject.published ? (
                            <button
                                className="badge badge-primary mr-2"
                                onClick={() => this.updatePublished(false)}
                            >
                                Unpublish
                            </button>
                        ) : (
                            <button
                                className="badge badge-primary mr-2"
                                onClick={() => this.updatePublished(true)}
                            >
                                Publish
                            </button>
                        )}

                            <button className="badge badge-danger mr-2" onClick={this.deleteProject}>
                                Delete
                            </button>

                            <button type="submit" className="badge badge-success" onClick={ this.updateProject}>
                                Update
                            </button>

                            <p>{this.state.message}</p>

                            </div>

                            ) : (
                                <div>
                                    <br />
                                    <p>Please click on a Project...</p>
                                </div>
                        )}

                    </div>
                )
    }

}