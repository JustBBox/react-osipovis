import './Modal.css';
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";

function Modal(props) {
    const [commitHash, setCommitHash] = useState('');

    //escape button close helper
    const closeOnEscapeKeyDown = (e) => {
        if((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }

    }

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [])

    const handleChange = (e) => {
        e.preventDefault();
        let value = e.target.value;
        setCommitHash(value)
    }

    if(!props.show) {
        return null;
    }

    if(props.commitHash) setCommitHash(props.commitHash);
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <form onSubmit={props.onClose}>
                    <div className="indent_modal_div">
                        <h2 className="modal_header">Hew build</h2>
                        <FormInput name="commitHash" mask={false} labelText="Enter the commit hash which you want to build." important={false}
                                   placeholder="Commit hash" uniqueHash="3"
                                   cb={handleChange} type="search"/>
                        <div className="form_btns">
                            <Button type="submit" btnClass="btn-init yellow_btn" id="submit_btn">Run build</Button>
                            <Link className="unlink container_link" to="/">
                                <Button btnClass="btn-init grey_btn" method={props.onClose}>Cancel</Button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal;
