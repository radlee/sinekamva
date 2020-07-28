import React, { Component } from "react";
import ProjectDataService from "../services/project.service";
import { Link } from "react-router-dom";


export default class ProjectsList extends Component {

    constructor(props) {
        super(props);
        this.onChangeSearchProject = this.onChangeSearchProject.bind(this);
        this.getAllProjects = this.getAllProjects.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveProject = this.setActiveProject.bind(this);
        this.removeAllProjects = this.setActiveProject.bind(this);
        this.searchProject = this.searchProject.bind(this);

        this.state = {
            projects: [],
            currentProject: null,
            currentIndex : -1,
            searchProject: ""
        };
    }

    componentDidMount() {
        this.getAllProjects();
    }

    onChangeSearchProject(e) {
        const searchProject = e.target.value;

        this.setState({
            searchProject: searchProject
        });
    }
    getAllProjects() {
        ProjectDataService.getAll()
        .then(response => {
            this.setState({
                projects: response.data
            });
            console.log(response.data)
        });
    }
    refreshList() {
        this.getAllProjects();
        this.setState({
            currentProject: null,
            currentIndex: -1
        });
    }
    setActiveProject(project, index) {
        this.setState({
            currentProject: project,
            currentIndex: index
        });
    }
    removeAllProjects() {
        ProjectDataService.deleteAll()
        .then(response => {
            console.log(response.data);
            this.refreshList()
        })
        .catch(e => {
            console.log(e)
        });
    }
    searchProject() {
        ProjectDataService.findByName(this.state.searchProject)
        .then(response => {
            this.setState({
                projects: response.data
            });
            console.log(response.data)
        })
        .catch(e => {
            console.log(e)
        });
    }

    render() {

        const { searchProject, projects, currentProject, currentIndex } = this.state;

        return (
            <div className="container">
                <br />
            <div className="list-row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                                type="text"
                                className="form-control"
                                placeholder="Search project by name"
                                value={searchProject}
                                onChange={this.onChangeSearchProject}
                        />
                        <div className="input-group-append">
                            <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={this.searchProject}
                            >Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Projects List</h4>
                    <ul className="list-group">
                        {projects && 
                        projects.map((project, index) => (
                            <li 
                                className={"list-group-item" + (index === currentIndex ? "active" : "")}
                                key={index}
                            >
                                {project.username}
                            </li>
                        ))}
                    </ul>
                    <button 
                            className="m-3 btn btn-sm btn-danger"
                            onClick={this.removeAllProjects}
                    >
                        Remove All
                    </button>
                </div>
                <div className="col-md-6">
                    {currentProject ? (
                        <div>
                            <h4>Project</h4>
                            <div>
                                <label>
                                    <strong>User Name</strong>
                                </label> {" "}
                                {currentProject.username}
                            </div>
                            <div>
                                <label>
                                    <strong>Project Name</strong>
                                </label> {" "}
                                {currentProject.projectname}
                            </div>
                            <div>
                                <label>
                                    <strong>Description</strong>
                                </label> {" "}
                                {currentProject.decription}
                            </div>
                            <div>
                                <label>
                                    <strong>Donation</strong>
                                </label> {" "}
                                {currentProject.donation}
                            </div>
                            <div>
                                <label>
                                    <strong>Status</strong>
                                </label> {" "}
                                (currentProject.published ? "Published : "Pending")
                            </div>

                            <Link  
                                    to={"/projects/" + currentProject.id}
                                    className="badge badge-warning"
                            >
                                Edit
                            </Link>
                        </div>

                        
                    ) : (
                        <div>
                            <p>Please click on a project...</p>
                        </div>
                    )}
                </div>
            </div>
            </div>
        );
    }
}