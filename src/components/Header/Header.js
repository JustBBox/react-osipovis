import './Header.css';
import  AppContext from '../../app-context';
import { ReactComponent as Cog } from '../../assets/cog.svg';
import { ReactComponent as Play } from '../../assets/play.svg';
import Button from '../Button/Button';
import { Link } from "react-router-dom";
import {DEFAULT_STATE} from "../../App";



function Header(props) {
    const redirectTo = (e) => {
        return props.handleState('path', '/settings')
    };
    const showModal = (e) => {
        return props.handleState('show', true)
    };

    return (
        <div className="header">
            <AppContext.Consumer>
                {(context) => {
                    console.log('RENDER HEADER: ', context.repo, ' ', new Date().toTimeString());
                    const spanStyle = context.repo !== 'School CI server' ? 'settings_p display_none' : 'settings_p';
                    if (window.location.pathname !== '/settings') {

                        let buildComponent = <></>;
                        if (context.repo !== 'School CI server') {
                            buildComponent = (
                                <Button btnClass="build_btn grey_btn" method={showModal}>
                                    <Play className="build_icon"/>
                                    <span className="build_span">Run build</span>
                                </Button>
                            )
                        }
                        return (
                            <>
                                <h2 className={context.repo === DEFAULT_STATE.repo ? "title" : "title title_changed"}>{context.repo}</h2>
                                <div className="btns_container">
                                    {buildComponent}
                                    <Button btnClass="settings_btn grey_btn" method={redirectTo}>
                                        <Link className="unlink container_link" to="/settings">
                                            <Cog className="settings-icon"/>
                                            <span className={spanStyle}>Settings</span>
                                        </Link>
                                    </Button>
                                </div>
                            </>
                        )
                    } else {
                        return (
                            <h2 className={context.repo === DEFAULT_STATE.repo ? "title" : "title title_changed"}>{context.repo}</h2>
                        )
                    }
                }}
            </AppContext.Consumer>
        </div>
    );
}

export default Header;
