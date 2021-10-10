import React, { Component } from 'react';
import Header from './components/Header/Header';
import InitRepository from './pages/InitRepository/InitRepository';
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import Footer from './components/Footer/Footer';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class App extends Component {
    constructor(props) {
        super(props);
        this.handleRoute = this.handleRoute.bind(this);
        this.state = {
            path: '/',
        };
    }
    handleRoute(path) {
        const { value, name } = path;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <Header titleText="School CI server"/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" render={(props) => <InitRepository {...props} handleRoute={this.handleRoute} />}/>
                            <Route path="/settings" component={SettingsPage}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
