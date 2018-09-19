import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Cards from 'react-credit-cards';
import { withRouter } from "react-router-dom";
import 'react-credit-cards/es/styles-compiled.css';

export class PaymentForm extends Component {

    state = {
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focused: ''
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    //export const PaymentForm = () => {
    render = () => {
        return (
            <React.Fragment>
                <Typography variant="title" gutterBottom>
                    Payment method
      </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12} md={6}>
                        <TextField required id="cardName" value={this.state.name} label="Name on card" fullWidth
                         onChange={this.handleChange('name')} 
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required id="cardNumber" value={this.state.number} label="Card number" fullWidth 
                        onChange={this.handleChange('number')} 
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required id="expDate" value={this.state.expiry} label="Expiry date" fullWidth 
                        onChange={this.handleChange('expiracy')} 
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cvv"
                            label="CVV"
                            value={this.state.cvc}
                            helperText="Last three digits on signature strip"
                            fullWidth
                            onChange={this.handleChange('cvv')} 
                        />
                    </Grid>
                    <Cards
                        number={this.state.number}
                        name={this.state.name}
                        expiry={this.state.expiry}
                        cvc={this.state.cvc}
                        focused={this.state.focused}
                    ></Cards>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                            label="Remeber credit card details for next time"
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withRouter(PaymentForm);
//export default PaymentForm;