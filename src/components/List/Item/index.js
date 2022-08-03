import react from "react";
// get our fontawesome imports
import {
    faArrowsRotate,
    faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./TodoItem.css";

const TodoItem = ({ text, completed, onComplete, onDelete }) => {
    const iconTask = completed ? faCheckDouble : faArrowsRotate;

    
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${
                    completed && "Icon-check--active"
                }`}
                onClick={onComplete}
            >
                <FontAwesomeIcon icon={iconTask} />
            </span>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                {text}
            </p>
            <span className="Icon Icon-delete" onClick={onDelete}>
                X
            </span>
        </li>
    );
};

export { TodoItem };
