import './Modal.css';
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import {connect, useSelector} from "react-redux";
import {HIDE_MODAL} from "../../store/actions/ActionTypes";

function Modal({onClose}) {
    const show = useSelector(state => state.show.visible)


    // Пояснения по поводу второго аргумента useEffect
    // If you want to run an effect and clean it up only once (on mount and unmount), you can pass
    // an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on
    // any values from props or state, so it never needs to re-run. This isn’t handled as a special case
    // — it follows directly from how the dependencies array always works.
    useEffect(() => {
        //escape button close helper
        const closeOnEscapeKeyDown = (e) => {
            if((e.charCode || e.keyCode) === 27) {
                onClose();
            }
        }
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [onClose])

    const handleChange = (e) => {
        e.preventDefault();
        onClose();
    }

    if(!show) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal" onClick={onClose}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <form onSubmit={handleChange}>
                    <div className="indent_modal_div">
                        <h2 className="modal_header">New build</h2>
                        <FormInput name="commitHash" mask={false} labelText="Enter the commit hash which you want to build." important={false}
                                   placeholder="Commit hash" uniqueHash="3"
                                   cb={handleChange} type="search"/>
                        <div className="form_btns">
                            <Button type="submit" btnClass="btn-init yellow_btn" id="submit_btn">Run build</Button>
                            <Link className="unlink container_link" to="/">
                                <Button btnClass="btn-init grey_btn" method={onClose}>Cancel</Button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>, document.getElementById('root')
    )
}

export default Modal;

const mapStateToProps = state => {
    return { };
};

const mapDispatchToProps = dispatch => {
    return {
        onClose: () => dispatch({type: HIDE_MODAL}),
    }
};

export const ReduxedModal = connect(mapStateToProps, mapDispatchToProps)(Modal);
