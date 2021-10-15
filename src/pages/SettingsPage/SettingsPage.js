import './SettingsPage.css';
import FormInput from "../../components/FormInput/FormInput";
import Button from '../../components/Button/Button';
import { Link } from "react-router-dom";
import { DEFAULT_STATE } from '../../App'

import React from "react";
import AppContext from '../../app-context';

class SettingsPage extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props)
        this.state = Object.assign(DEFAULT_STATE);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.repoCheck = new RegExp(`(^[A-Za-z][A-Za-z0-9-]*[\\/][A-Za-z][A-Za-z0-9-]*)`)
    }

    componentDidMount() {
        if(this.state.repo === DEFAULT_STATE.repo) {
            let clone = {...this.context};
            if (clone.repo === DEFAULT_STATE.repo) {
                clone.repo = '';
            }
            this.setState({...clone});
        }
        this.setState({disabled: true})
    }

    componentWillUnmount() {
        if(this.state.repo.trim() === '') {
            this.context.handleState('repo', DEFAULT_STATE.repo)
        }
    }

    handleChange(event) {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;

        switch (event.target.name) {
            case 'syncTime':
                let reg = /^\d+$/;
                if(reg.test(event.target.value)) {
                    this.setState({ [name]: value });
                } else {
                    event.target.value = event.target.value.slice(0,event.target.value.length);
                }
                break;
            default:
                this.setState({[name]: value});
                break;
        }
    }

    handleSubmit(event) {
        if(this.repoCheck.test(this.state.repo) || this.state.buildCommands.trim() === '') {
            setTimeout(() => {
                this.props.history.push('/');
                this.context.handleState('commits', this.state);
            }, 1500);
            this.setState({disabled: true});
            document.getElementById('cancel_btn').disabled = true;
            event.preventDefault();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const repositoryInput = document.getElementById('MaskedInput1');
        let failed = document.getElementById('MaskedInput1').value.trim() === '' || this.state.buildCommands.trim() === '';
        if(document.activeElement === repositoryInput) {
            if (this.repoCheck.test(this.state.repo)) {
                repositoryInput.style.background = '#FFFFFF';
            } else {
                failed = true;
                repositoryInput.style.background = '#c0000042';
            }
        }

        if(prevState.repo !== this.state.repo || prevState.buildCommands !== this.state.buildCommands) {
            if(failed) {
                this.setState({disabled: true})
            } else {
                this.setState({disabled: false})
            }
        }
    }

    render(props)
    {
        const cb = () => this.context.handleState('path', '/');
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="indent_div">
                    <p className="settings_header">Settings</p>
                    <p className="settings_header-helper">Configure repository connection and synchronization
                        settings.</p>
                    <FormInput name="repo" mask={false} labelText="GitHub repository" important={true} placeholder="user-name/repo-name"
                               uniqueHash="1" value={this.state.repo} cb={this.handleChange}/>
                    <FormInput name="buildCommands" mask={false}  labelText="Build command" important={true} placeholder="npm ci && npm run build"
                               uniqueHash="2" value={this.state.buildCommands} cb={this.handleChange} type="search"/>
                    <FormInput name="mainBranch" mask={false}  labelText="Main branch" important={false} placeholder="master |" uniqueHash="3"
                               value={this.state.mainBranch} cb={this.handleChange} type="search"/>
                    <div className="row-composition">
                        <p>Synchronize every</p>
                        <input name="syncTime" type="text" className="time_input" value={this.state.syncTime} onChange={this.handleChange}/>
                        <p>minutes</p>
                    </div>
                    <div className="form_btns">
                        <Button type="submit" btnClass="btn-init yellow_btn" id="submit_btn" disabled={this.state.disabled}>Save</Button>
                        <Link className="unlink container_link" to="/">
                            <Button btnClass="btn-init grey_btn" method={cb} id="cancel_btn">Cancel</Button>
                        </Link>
                    </div>
                </div>
            </form>
        );
    }
}

export default SettingsPage;
