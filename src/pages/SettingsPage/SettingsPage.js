import './SettingsPage.css';
import FormInput from "../../components/FormInput/FormInput";
import Button from '../../components/Button/Button';
// import {
//     Link
// } from "react-router-dom";

function SettingsPage(props) {
    return (
        <div className="indent_div">
            <p className="settings_header">Settings</p>
            <p className="settings_header-helper">Configure repository connection and synchronization settings.</p>
            <FormInput labelText="GitHub repository" important={true} placeholder="user-name/repo-name" uniqueHash="1"/>
            <FormInput labelText="Build command" important={true} placeholder="npm ci && npm run build" uniqueHash="2"/>
            <FormInput labelText="Main branch" important={false} placeholder="master |" uniqueHash="3"/>
            <div className="row-composition">
                <p>Synchronize every</p>
                <input type="text" className="time_input"/>
                <p>minutes</p>
            </div>
            <div className="form_btns">
                <Button btnClass="btn-init yellow_btn">Save</Button>
                <Button btnClass="btn-init grey_btn">Cancel</Button>
            </div>
        </div>
    );
}

export default SettingsPage;
