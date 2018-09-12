import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from "@material-ui/core/styles/index";
import { AppBar, Toolbar, Typography, Card, CardContent } from "@material-ui/core/";
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { DataTable } from './components/DataTable/DataTable'
import FirebaseService from './services/FirebaseService.js';
import { urls, privateUrls } from './utils/url';
import { Route } from 'react-router-dom';
import { TopBar } from './components/TopBar/Topbar';
import { Add } from './components/Add/Add'
import { Welcome } from './components/Welcome/Welcome'

/**
 * https://blog.tecsinapse.com.br/utilizando-react-redux-firebase-2bf93ea9f422
 * https://blog.tecsinapse.com.br/criando-uma-aplica%C3%A7%C3%A3o-react-firebase-passo-a-passo-9ebc5a8a442f
 * https://material-ui.com/customization/css-in-js/#withstyles-styles-options-higher-order-component
 */

const theme = createMuiTheme({
    palette: {
        primary: purple,
    },
});

class App extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        FirebaseService.getDataList('users', (dataReceived) => {
            this.setState({ data: dataReceived })
        })
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <TopBar></TopBar>

                    <Card style={{ margin: '50px' }}>
                        <CardContent>

                            <Route exact
                                path={urls.home.path}
                                render={(props) => <Welcome {...props} />}
                            />

                            <Route exact
                                path={urls.data.path}
                                render={(props) =>
                                    <DataTable {...props} data={this.state.data} />}
                            />

                            <Route exact
                                path={urls.add.path}
                                render={(props) =>
                                    <Add {...props} />}
                            />

                            <Route exact
                                path={privateUrls.edit.path}
                                render={(props) => <Add {...props} />}
                            />
                        </CardContent>
                    </Card>

                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default App;