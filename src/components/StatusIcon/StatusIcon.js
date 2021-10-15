import './StatusIcon.css';
import { ReactComponent as Approved } from '../../assets/done.svg';
import { ReactComponent as Failed } from '../../assets/fail.svg';
import { ReactComponent as Progress } from '../../assets/clock.svg';

function StatusIcon(props) {
    switch (props.status) {
        case 'approved':
            return <Approved className="grid_top_icon"/>
        case 'failed':
            return <Failed className="grid_top_icon"/>
        default:
            return <Progress className="grid_top_icon"/>}
}

export default StatusIcon;
