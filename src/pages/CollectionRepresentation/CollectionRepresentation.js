import './CollectionRepresentation.css';
import { ReactComponent as DefaultSvg } from '../../assets/default.svg';
import Commit from '../../components/Commit/Commit';
import { Link } from "react-router-dom";

//Context Manipulation
import React, { useContext } from "react";
import AppContext from '../../app-context';
import Button from "../../components/Button/Button";

function CollectionRepresentation(props) {
    console.log('COLLECTION RENDERED')
    const { commits } = useContext(AppContext);
    console.log(commits);
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
