import './InitRepository.css';
import { ReactComponent as DefaultSvg } from '../../assets/default.svg';
import Button from '../../components/Button/Button';
import { Link } from "react-router-dom";

//Context Manipulation
import React from "react";
import { DIRECT_TO_SETTINGS } from "../../store/actions/ActionTypes";
import { connect } from "react-redux";

function InitRepository({ handleState }) {

    return (
        <div className="content">
            <div className="default_page">
                <DefaultSvg id="default_icon"/>
                <p className="default_p">Configure repository connection<br/>and synchronization settings</p>
                <Link className="unlink" to="/settings">
                    <Button btnClass="btn_init yellow_btn" method={handleState}>Open settings</Button>
                </Link>
            </div>
        </div>
    );
}


export default InitRepository;

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        handleState: () => dispatch({type: DIRECT_TO_SETTINGS})
    }
};

export const ReduxedInitRepository = connect(mapStateToProps, mapDispatchToProps)(InitRepository);


