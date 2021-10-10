import './Button.css';

function Button(props) {
    return (
        <button className={props.btnClass}>
            {props.children}
        </button>
    );
}

export default Button;
