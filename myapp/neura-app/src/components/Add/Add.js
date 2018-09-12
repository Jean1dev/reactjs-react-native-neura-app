import { Button, TextField, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { urls } from "../../utils/url";
import FirebaseService from "../../services/FirebaseService";

export class Add extends Component {

    state = { id: null, temperatura: '', umidade: '', data: '', cliente: '' };

    componentWillMount = () => {
        const { id } = this.props.match.params;

        if (!(id === undefined || !id)) {
            this.setState({ id });
            FirebaseService.getUniqueDataBy('users', id, (data) => this.setState({ ...data }, () => console.log(this.state)));
        }

    };

    submit = (event) => {
        event.preventDefault();

        const { name } = this.state;
        const { email } = this.state;
        const { password } = this.state;

        let objToSubmit = {
            name,
            email,
            password
        };

        if (this.props.match.params.id === undefined) {
            FirebaseService.pushData('users', objToSubmit);
        } else {
            FirebaseService.updateData(this.props.match.params.id, 'users', objToSubmit)
        }

        this.props.history.push(urls.data.path);

    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render = () => {
        return (<React.Fragment>

            <Typography variant="headline" component="h2">Add New</Typography>
            <form onSubmit={this.submit}>
                <TextField className="input-field"
                    type="text"
                    value={this.state.name}
                    label="Name"
                    required
                    onChange={this.handleChange('name')} />

                <TextField className="input-field"
                    type="text"
                    label="Email"
                    value={this.state.email}
                    required
                    onChange={this.handleChange('email')} />

                <TextField className="input-field"
                    type="text"
                    label="Password"
                    value={this.state.password}
                    required
                    onChange={this.handleChange('password')} />

                <Button type="submit"
                    style={{ marginTop: '20px', display: 'inline-block' }}>
                    Add
                </Button>
            </form>
        </React.Fragment>)
    }
}

export default withRouter(Add);