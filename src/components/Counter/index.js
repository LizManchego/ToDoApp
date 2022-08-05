import React, { useContext } from "react";
import { TodoContext } from "../Context";
import "./TodoCounter.css";

const TodoCounter = () => {
    const { completedTodos, totalTodos, nameUser } = useContext(TodoContext);
    const event = new Date();
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    const dateToday = event.toLocaleDateString('es-ES', options);
    return (
        <div className="appUI-Title m-5 mb-0">
            <h3>¡Hola,<br></br>{nameUser}!</h3>
            <p className="dateToday">{ dateToday }.</p>
            <h2 className="TodoCounter mt-5">
                Has realizado {completedTodos} de {totalTodos} tareas!
            </h2>
        </div>
    );
};

export { TodoCounter };
