import React from 'react';
import {connect, useSelector} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { ReduxedHeader } from './components/Header/Header';
import { ReduxedModal } from "./components/Modal/Modal";
import { ReduxedSettingsPage } from './pages/SettingsPage/SettingsPage';
import { ReduxedInitRepository } from './pages/InitRepository/InitRepository';
import {ReduxedCollectionRepresentation} from "./pages/CollectionRepresentation/CollectionRepresentation";
import Footer from './components/Footer/Footer';
import './App.css';

export const DEFAULT_STATE = {
    path: '/',
    repo: 'School CI server',
    buildCommands: 'npm ci && npm run build',
    mainBranch: 'master',
    syncTime: 10,
    show: false,
    commits: []
};

function App (props) {
    const repo = useSelector(state => state.settings.repo);
    const commits = useSelector(state => state.commits.data);
    return (
        <Router>
            <div className="App">
                <ReduxedHeader/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={commits.length > 0 && repo !== DEFAULT_STATE.repo ? ReduxedCollectionRepresentation: ReduxedInitRepository}/>
                        <Route path="/settings" component={ReduxedSettingsPage}/>
                    </Switch>
                </div>
                <ReduxedModal/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {}
};

export const ReduxedApp = connect(mapStateToProps, mapDispatchToProps)(App);
