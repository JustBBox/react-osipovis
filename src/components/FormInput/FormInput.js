import './FormInput.css';
import MaskedInput from 'react-input-mask'
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
                    name={props.name}
                    type="search"
                    mask={props.mask}
                    className="formInput_control"
                    placeholder={props.placeholder}
                    id={id_}
                    value={props.value}
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
                    name={props.name}
                    type={props.type || "text"}
                    className="formInput_control"
                    placeholder={props.placeholder}
                    onChange={props?.cb}
                    value={props.value}
                    id={id_}
                />
            </div>
        );
    }
}

export default FormInput;
