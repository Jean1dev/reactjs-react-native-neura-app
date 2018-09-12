import React, {Component} from 'react';
import './App.css';
import {MuiThemeProvider} from "@material-ui/core/styles/index";
import {AppBar, Toolbar, Typography} from "@material-ui/core/";
import {createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import {DataTable} from './components/DataTable/DataTable'

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
});

class App extends Component {

    state = {
        data: [
            {
                key: 'test key key',
                temperatura: 'test key temperatura',
                umidade: 'test key umidade',
                cliente: 'test key cliente',
                data: 'test key data',
            }
        ]
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography type="title" color="inherit">
                                Neurinha
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <DataTable data={this.state.data}/>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default App;