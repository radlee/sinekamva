import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import ProjectDataService from "../services/project.service";

export default class CreateProject extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDonation = this.onChangeDonation.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: null,
            username: "",
            description: "",
            donation: "",
            published: false,
            submited: false,
            date: new Date(),
            users: []
        }
    }

    onChangeUsername (e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription (e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDonation (e) {
        this.setState({
            donation: e.target.value
        });
    }

    onChangeDate (date) {
        this.setState({
            date: date
        });
    }

    saveProject (e) {
        var data = {
            username: this.state.username,
            projectname: this.state.projectname,
            description: this.state.description,
            donation: this.state.donation
        }

        ProjectDataService.create(data)
        .then(response => {
            this.setState({
                id: response.data.id,
                username: response.data.username,
                projectname: response.projectname,
                description: response.data.description,
                donation: response.data.donation,
                published: response.data.published,
                submitted: true
            });
            console.log("The User: ", response.data)
        })
        .catch(e => {
            console.log(e)
        });
    }

    newProject() {
        this.setState({
            id: null,
            username: "",
            projecname: "",
            description: "",
            donation: "",
            published: false,
            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
            <h3>Create a New Project</h3>
                {this.state.submitted ?  (
                    <div>
                        <h4>Submitted Successfully</h4>
                        <button className="btn btn-success" onClick={this.newProject}>Add</button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="username">User Name</label>
                            <input 
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    required
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                    name="username"
                             />
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectname">Project Name</label>
                            <input 
                                    type="text"
                                    className="form-control"
                                    id="projectname"
                                    required
                                    value={this.state.projectname}
                                    onChange={this.onChangeProjectName}
                                    name="projectname"
                             />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input 
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    required
                                    value={this.state.decription}
                                    onChange={this.onChangeDescription}
                                    name="description"
                             />
                        </div>
                        <div className="form-group">
                            <label htmlFor="donation">Donation</label>
                            <input 
                                    type="text"
                                    className="form-control"
                                    id="donation"
                                    required
                                    value={this.state.donation}
                                    onChange={this.onChangeDonation}
                                    name="donation"
                             />
                        </div>
                        <div className="form-group">
                      
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        
                        </div>

                        <button onClick={this.saveProject} className="btn btn-success">Submit</button>

                    </div>
                )}

            </div>
        )
    }
}