import './Header.css';
import { ReactComponent as Cog } from '../../assets/cog.svg';
import Button from '../Button/Button';
import {Link} from "react-router-dom";
//Излишняя логика
function Header(props) {
    const pathname = window.location.pathname;
    if(pathname === '/settings') {
        return (
            <div className="header">
                <h2 className="title">{props.titleText}</h2>
            </div>
        );
    } else {
        return (
            <div className="header">
                <h2 className="title">{props.titleText}</h2>
                <Button btnClass="settings_btn grey_btn">
                    <Link className="unlink container_link" to="/settings">
                        <Cog id="settings_icon"/>
                        <span className="settings_p">Settings</span>
                    </Link>
                </Button>
            </div>
        );
    }
}

export default Header;
