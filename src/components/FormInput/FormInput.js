import './FormInput.css';
import MaskedInput from 'react-text-mask'
// import Button from '../../components/Button/Button';
// import {
//     Link
// } from "react-router-dom";

function FormInput(props) {
    const id_ = 'MaskedInput' + props.uniqueHash;
    if(props.mask) {
        return (
            <div className="formInput_box">
                <label className="formInput_label" for={id_}>
                    {props.labelText},
                    props.important && <p color="red"> *</p>
                </label>
                <MaskedInput
                    mask={props.mask}
                    className="formInput_control"
                    placeholder={props.placeholder}
                    id={id_}
                />
            </div>
        );
    } else {
        return (
            <div className="formInput_box">
                <div className="overflow_div">
                    <label className="formInput_label" htmlFor={id_}>
                        <p>{props.labelText}</p>
                        {props.important && <p className='red'>*</p>}
                    </label>
                </div>
                <input
                    type="text"
                    className="formInput_control"
                    placeholder={props.placeholder}
                    id={id_}
                />
            </div>
        );
    }
}

export default FormInput;
