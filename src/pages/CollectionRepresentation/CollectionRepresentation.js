import './CollectionRepresentation.css';
import Commit from '../../components/Commit/Commit';

//Context Manipulation
import React from "react";
import Button from "../../components/Button/Button";
import {connect, useSelector} from "react-redux";

function CollectionRepresentation(props) {
    const commits = useSelector(state => state.commits.data);
    const commitsList = commits.map((value) =>
        <Commit data={value} key={value.commitHash}></Commit>
    );
    return (
        <div className="content_collection">
            {commitsList}
            <Button btnClass="btn_more grey_btn">Show More</Button>
        </div>
    );
}

export default CollectionRepresentation;

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {}
};

export const ReduxedCollectionRepresentation = connect(mapStateToProps, mapDispatchToProps)(CollectionRepresentation);
