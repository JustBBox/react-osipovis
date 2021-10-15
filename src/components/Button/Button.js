import './Button.css';

function Button(props) {
    const type_ = props?.type || 'button';
    return (
        <button type={type_} className={props.btnClass} onClick={props?.method} id={props?.id} disabled={props.disabled}>
            {props.children}
        </button>
    );
}

export default Button;
