import React, { Component } from 'react';
import { create } from './ProjectsFunctions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            id: null,
            username: "",
            description: "",
            donation: "",
            published: false,
            submited: false,
            date: new Date(),
            projects: []
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    onChangeDate (date) {
        this.setState({
            date: date
        });
    }
    

    onSubmit(e) {
        e.preventDefault()
        const project = {
            username: this.state.username,
            projectname: this.state.projectname,
            description: this.state.description,
            donation: this.state.donation,
            password: this.state.password
        }

        create(project).then(res => {
            this.props.history.push('/landing')
        })
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
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            
                            <h1>Please Create a Project</h1>

                            {this.state.submitted ?  (
                                <div>
                                    <h4>Submitted Successfully</h4>
                                    <button className="btn btn-success" onClick={this.newProject}>Add</button>
                                </div>
                            ) : (

                                <div>

                                
                                <div className="form-group">
                                    <label htmlFor="username">User Name</label>
                                    <input  type="text" 
                                            id="username"
                                            className="form-control" 
                                            name="username" 
                                            placeholder="Enter your User Name" 
                                            value={this.state.username} 
                                            onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="projectname">Project Name</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            name="projectname" 
                                            placeholder="Enter your Project Name" 
                                            value={this.state.projectname} 
                                            onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            name="description" 
                                            placeholder="Please describe your Project" 
                                            value={this.state.description} 
                                            onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="donation">DonaContribution | Donation | Support </label>
                                    <input  type="text" 
                                            className="form-control" 
                                            name="donation" 
                                            placeholder="How would you like to be a helping hand / donate?" 
                                            value={this.state.donation} 
                                            onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                            
                                    <DatePicker
                                        selected={this.state.date}
                                        onChange={this.onChangeDate}
                                    />
                                
                                </div>

                                <button type="submit"
                                        className="btn btn-lg btn-primary btn-block">
                                        Create Project
                                </button>
                            </div>)}
                        </form>
                    </div>
                </div>
            </div>
            )
    }
}

export default Create