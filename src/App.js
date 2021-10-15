import React, {Component} from 'react';
import AppContext from './app-context';

import Header from './components/Header/Header';
import InitRepository from './pages/InitRepository/InitRepository';
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import CollectionRepresentation from "./pages/CollectionRepresentation/CollectionRepresentation";

import Footer from './components/Footer/Footer';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { store } from "./store";
import Modal from "./components/Modal/Modal";

export const DEFAULT_STATE = {
    path: '/',
    repo: 'School CI server',
    buildCommands: 'npm ci && npm run build',
    mainBranch: 'master',
    syncTime: 10,
    show: false,
    commits: []
};

class App extends Component {

    constructor(props) {
        super(props);

        this.handleState = this.handleState.bind(this);

        this.state = Object.assign(DEFAULT_STATE);
        this.state.handleState = this.handleState;
    }

    handleState(name, value) {
        if(name === 'commits') {
            //Mock data injected to the App state
            value['commits'] = store;
            this.setState(value)
        } else {
            this.setState({[name]: value});
        }
    }

    render() {
        console.log('RENDERED APP')
        return (
            <Router>
                <AppContext.Provider value={this.state} >
                <div className="App">
                    <Header handleState={this.handleState} titleText={this.state.repo}/>
                    <div className="container">
                        {/*<Modal/>*/}
                        <Switch>
                            <Route exact path="/" component={this.state.commits.length === 0 || this.state.repo === DEFAULT_STATE.repo ? InitRepository : CollectionRepresentation}/>
                            <Route path="/settings" component={SettingsPage}/>
                        </Switch>
                    </div>
                    <Modal onClose={() => this.handleState('show', false)} show={this.state.show}/>
                    <Footer/>
                </div>
                </AppContext.Provider>
            </Router>
        );
    }
}

export default App;
