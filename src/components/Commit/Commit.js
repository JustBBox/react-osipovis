import './Commit.css';
import { ReactComponent as TimeIcon } from '../../assets/code-commit.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import { ReactComponent as Stopwatch } from '../../assets/stopwatch.svg';
import { Link } from "react-router-dom";

//Context Manipulation
import StatusIcon from "../StatusIcon/StatusIcon";

function Commit(props) {
    return (
        <div className="container_commit">
            <div className="grid_right_block">
                <div className="one_row date_row">
                    <Calendar className="time_icon"/>
                    <p className="commit_message_bottom_block_nested">{props.data.date}</p>
                </div>
                <div className="one_row">
                    <Stopwatch className="time_icon"/>
                    <p className="trunk">{props.data.time}</p>
                </div>
            </div>
            <div className="grid_left_block">
                <StatusIcon status={props.data.status} className="grid_top_icon"/>
                <div className="grid_top_left">
                    <p className="commit_message_tag">{props.data.id}</p>
                    <p className="commit_message">{props.data.message}</p>
                </div>
            </div>
            <div className="grid_left_bottom_block">
                <span className="commit_message_bottom_block">
                        <TimeIcon className="time_icon_grid"/>
                        <p className="commit_message_bottom_block_nested">{props.data.branch}</p>
                        <p className="commit_message_bottom_block_nested hashCommit">{props.data.commitHash}</p>
                </span>
                <span className="user_span">
                    <UserIcon className="time_icon_grid"/>
                    <p className="commit_message_bottom_block">{props.data.author}</p>
                </span>
            </div>
            <div className="show"/>
        </div>
    );
}

export default Commit;
