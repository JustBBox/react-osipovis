import './Header.css';
import { ReactComponent as Cog } from '../../assets/cog.svg';
import { ReactComponent as Play } from '../../assets/play.svg';
import Button from '../Button/Button';
import { Link } from "react-router-dom";
import {DEFAULT_STATE} from "../../App";
import { connect, useSelector } from 'react-redux';

import {DIRECT_TO_SETTINGS, SHOW_MODAL} from "../../store/actions/ActionTypes";

//react component
function Header({ showModal, handleState }) {
    const repo = useSelector(state => state.settings.repo);
    const path = useSelector(state => state.path.route);
    console.log(repo)
    console.log(repo !== 'School CI server' ? 'settings_p display_none' : 'settings_p')
    const headerContent = ( showModal, handleState, repo ) => {
        const spanStyle = repo !== 'School CI server' ? 'settings_p display_none' : 'settings_p';
        if (path !== '/settings') {
            let buildComponent = <></>;
            if (repo !== 'School CI server') {
                buildComponent = (
                    <Button btnClass="build_btn grey_btn" method={showModal}>
                        <Play className="build_icon"/>
                        <span className="build_span">Run build</span>
                    </Button>
                )
            }
            return (
                <>
                    <h2 className={repo === DEFAULT_STATE.repo ? "title" : "title title_changed"}>{repo}</h2>
                    <div className="btns_container">
                        {buildComponent}
                        <Link className="unlink container_link" to="/settings">
                            <Button btnClass="settings_btn grey_btn" method={handleState}>
                                <Cog className="settings-icon"/>
                                <span className={spanStyle}>Settings</span>
                            </Button>
                        </Link>
                    </div>
                </>
            )
        }
    }
    return (
        <div className="header">
            {headerContent(showModal, handleState, repo)}
        </div>
    );
}

export default Header;

//redux stuff

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        showModal: () => dispatch({type: SHOW_MODAL}),
        handleState: () => dispatch({type: DIRECT_TO_SETTINGS})
    }
};

export const ReduxedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
