import react from "react";
import './TodoList.css';

const TodoList = props => {
    return (
        <div className="d-flex justify-content-start">
            <ul className="d-flex justify-content-start flex-column  p-0  w-100 mx-5">
                {props.children}
            </ul>
        </div>
    );
};

export { TodoList };
