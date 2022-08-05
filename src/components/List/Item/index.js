import react from "react";
// get our fontawesome imports
import { faSquareCheck, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./TodoItem.css";

const TodoItem = ({ text, completed, pinup, onComplete, onDelete, onPinUp }) => {
    const iconTask = completed ? faSquareCheck : faSquare;

    return (
        <li className="TodoItem px-3">
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
            <div className="d-flex flex-column">
            <span className="Icon Icon-delete" onClick={onDelete}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </span>
            <span className={`Icon Icon-tag ${
                    pinup && "Icon-tag--active"
                }`}onClick={onPinUp}>
                <FontAwesomeIcon icon={faMapPin} />
            </span>
            </div>
        </li>
    );
};

export { TodoItem };
