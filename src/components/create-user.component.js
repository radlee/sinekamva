import React, { Component } from "react";

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            contact: ""
        }
    }

    onChangeUsername (e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeContact (e) {
        this.setState({
            contact: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            contact: this.state.contact,
            date: this.state.date
        }
        UserDataService.create(user)
        .then(response => {
            this.setState({
                id: response.user.id,
                username: response.user.username,
                contact: response.user.contact,
                date: response.user.date,
                submited: true
            });
            console.log(response.user);
        })
        .catch(e => {
            console.log(e)
        });
    }

    render() {
        return (
            <div>
                <p>You are on the Create User Component</p>
            </div>
        )
    }
}