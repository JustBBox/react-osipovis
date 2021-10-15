import './SettingsPage.css';
import FormInput from "../../components/FormInput/FormInput";
import Button from '../../components/Button/Button';
import { Link } from "react-router-dom";
import { DEFAULT_STATE } from '../../App'

import React, {useEffect, useState} from "react";
import {connect, useSelector} from "react-redux";
import {DIRECT_TO_MAIN, HIDE_MODAL} from "../../store/actions/ActionTypes";
import {updateBuildCommands, updateMainBranch, updateRepo, updateSyncTime} from "../../store/actions/SettingsActions";

function SettingsPage ({ history, SetRepo, SetBuildCommands, SetMainBranch , SetSyncTime, handleRoute}) {
    //context redux
    const repo = useSelector(state => state.settings.repo);
    const mainBranch = useSelector(state => state.settings.mainBranch);
    const buildCommands = useSelector(state => state.settings.buildCommands);
    const syncTime = useSelector(state => state.settings.syncTime);
    //local state
    const [disabled, setDisabled] = useState(true);
    const [localRepo, setLocalRepo] = useState(repo);
    const [localBuildCommands, setLocalBuildCommands] = useState(buildCommands);
    const [localMainBranch, setLocalMainBranch] = useState(mainBranch);
    const [localSyncTime, setLocalSyncTime] = useState(syncTime);
    const [repoCheck] = useState(new RegExp(`(^[A-Za-z][A-Za-z0-9-]*[\\/][A-Za-z][A-Za-z0-9-]*)`));

    if(localRepo === DEFAULT_STATE.repo) {
        setLocalRepo('');
    }

    function handleChange(event) {
        event.preventDefault();
        let value = event.target.value;

        switch (event.target.name) {
            case 'syncTime':
                let reg = /^\d+$/;
                if (reg.test(event.target.value)) {
                    setLocalSyncTime(value);
                } else {
                    event.target.value = event.target.value.slice(0, event.target.value.length);
                }
                break;
            case 'repo':
                setLocalRepo(value);
                break;
            case 'buildCommands':
                setLocalBuildCommands(value);
                break;
            case 'mainBranch':
                setLocalMainBranch(value);
                break;
            default:
                break;
        }
    }

    function handleSubmit(event) {
        if (repoCheck.test(localRepo) || localBuildCommands.trim() === '') {
            setTimeout(() => {
                SetRepo(localRepo);
                SetBuildCommands(localBuildCommands);
                SetMainBranch(localMainBranch);
                SetSyncTime(localSyncTime);
                setDisabled(false);
                history.push('/');
                handleRoute();
            }, 1500);
            setDisabled(true);
            document.getElementById('cancel_btn').disabled = true;
            event.preventDefault();
        }
    }

    useEffect(() => {
        const repositoryInput = document.getElementById('MaskedInput1');
        let failed = document.getElementById('MaskedInput1').value.trim() === '' || localBuildCommands.trim() === '';
        if (document.activeElement === repositoryInput) {
            if (repoCheck.test(localRepo)) {
                repositoryInput.style.background = '#FFFFFF';
            } else {
                failed = true;
                repositoryInput.style.background = '#c0000042';
            }
        }

        if (failed) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [localRepo, localBuildCommands, repoCheck]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="indent_div">
                <p className="settings_header">Settings</p>
                <p className="settings_header-helper">Configure repository connection and synchronization
                    settings.</p>
                <FormInput name="repo" mask={false} labelText="GitHub repository" important={true}
                           placeholder="user-name/repo-name"
                           uniqueHash="1" value={localRepo} cb={handleChange}/>
                <FormInput name="buildCommands" mask={false} labelText="Build command" important={true}
                           placeholder="npm ci && npm run build"
                           uniqueHash="2" value={localBuildCommands} cb={handleChange} type="search"/>
                <FormInput name="mainBranch" mask={false} labelText="Main branch" important={false}
                           placeholder="master |" uniqueHash="3"
                           value={localMainBranch} cb={handleChange} type="search"/>
                <div className="row-composition">
                    <p>Synchronize every</p>
                    <input name="syncTime" type="text" className="time_input" value={localSyncTime}
                           onChange={handleChange}/>
                    <p>minutes</p>
                </div>
                <div className="form_btns">
                    <Button type="submit" btnClass="btn-init yellow_btn" id="submit_btn"
                            disabled={disabled}>Save</Button>
                    <Link className="unlink container_link" to="/">
                        <Button btnClass="btn-init grey_btn" method={handleRoute} id="cancel_btn">Cancel</Button>
                    </Link>
                </div>
            </div>
        </form>
    );
}

export default SettingsPage;

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        handleRoute: () => dispatch({type: DIRECT_TO_MAIN}),
        SetRepo: (value) => dispatch(updateRepo(value)),
        SetBuildCommands: (value) => dispatch(updateBuildCommands(value)),
        SetMainBranch: (value) => dispatch(updateMainBranch(value)),
        SetSyncTime: (value) => dispatch(updateSyncTime(value)),
        onClose: () => dispatch({type: HIDE_MODAL}),
    }
};

export const ReduxedSettingsPage = connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
