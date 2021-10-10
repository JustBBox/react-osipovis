import './InitRepository.css';
import { ReactComponent as DefaultSvg } from '../../assets/default.svg';
import Button from '../../components/Button/Button';
import {
    Link
} from "react-router-dom";
const sendMessage = () => {

}
function InitRepository(props) {
    return (
        <div className="content">
            <div className="default_page">
                <DefaultSvg id="default_icon"/>
                <p className="default_p">Configure repository connection<br/>and synchronization settings</p>
                <Button btnClass="btn_init yellow_btn" onClick={sendMessage}><Link className="unlink" to="/settings">Open settings</Link></Button>
            </div>
        </div>
    );
}

export default InitRepository;




