import './InitRepository.css';
import { ReactComponent as DefaultSvg } from '../../assets/default.svg';
import Button from '../../components/Button/Button';
import { Link } from "react-router-dom";

//Context Manipulation
import React, { useContext } from "react";
import AppContext from '../../app-context';

function InitRepository(props) {
    const { handleState } = useContext(AppContext);
    const cb = () => handleState('path', '/settings');

    return (
        <div className="content">
            <div className="default_page">
                <DefaultSvg id="default_icon"/>
                <p className="default_p">Configure repository connection<br/>and synchronization settings</p>
                <Link className="unlink" to="/settings">
                    <Button btnClass="btn_init yellow_btn" method={cb}>Open settings</Button>
                </Link>
            </div>
        </div>
    );
}

export default InitRepository;




