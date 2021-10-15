import './FormInput.css';

function FormInput(props) {
    const id_ = 'MaskedInput' + props.uniqueHash;
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

export default FormInput;
