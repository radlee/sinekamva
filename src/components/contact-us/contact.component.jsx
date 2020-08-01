import React, { Component } from 'react';
// import * as emailjs from 'emailjs-com';

import { Row, Col, Container, Form, FormFeedback, Button, FormGroup, Label, Input } from 'reactstrap';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    handleSubmit(e) {
        e.preventDefault()

        const { name, email, subject, message } = this.state;

        let templateParams = {
            from_name: email,
            to_name: 'mafanga@gmail.com',
            subject: subject,
            message_html: message
        }

        // emailjs.send(
        //     'gmail',
        //     'template_XXXXXXX',
        //     'templateParams',
        //     'user_XXXXXXXX'
        // )

        this.resetForm()
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

    render() {
        return(
            <div>
                <Container>
                    <h1 className="h1">Get in Touch</h1>
                    <hr className="heading-horizon" />
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormGroup controlId="fromBasicEmail">
                            <Label className="label">Email Address</Label>
                            <Input 
                                type="email"
                                name="email"
                                value={ this.state.email }
                                className="text"
                                onChange={this.handleChange.bind(this, 'email')}
                                placeholder="Enter Email"
                            />
                        </FormGroup>
                        <FormGroup controlId="fromBasicName">
                            <Label className="label">Name</Label>
                            <Input 
                                type="text"
                                name="name"
                                value={ this.state.name }
                                className="text"
                                onChange={this.handleChange.bind(this, 'name')}
                                placeholder="Enter Name"
                            />
                        </FormGroup>
                        <FormGroup controlId="fromBasicSubject">
                            <Label className="label">Subject</Label>
                            <Input 
                                type="text"
                                name="subject"
                                value={ this.state.subject }
                                className="text"
                                onChange={this.handleChange.bind(this, 'subject')}
                                placeholder="Enter Subject"
                            />
                        </FormGroup>
                        <FormGroup controlId="fromBasicMessage">
                            <Label className="label">Message</Label>
                            <Input 
                                type="textarea"
                                name="message"
                                value={ this.state.message }
                                className="text"
                                onChange={this.handleChange.bind(this, 'message')}
                            />
                        </FormGroup>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default ContactForm;

