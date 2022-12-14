import React, { useContext, useState } from "react";
import { TodoContext } from "../Context";
import "./FormAdd.css";

const FormAdd = () => {
    // Creamos un estado para nuestro nuevo TODO
    const [newTodoValue, setNewTodoValue] = useState("");
    // Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal
    const { addTodo, setOpenModal } = useContext(TodoContext);

    // Creamos una función para actualizar el estado de nuestro nuevo TODO
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    // Función para cerrar el modal
    const onCancel = () => {
        setOpenModal(false);
    };

    // Función para agregar nuestro nuevo TODO
    const onSubmit = (event) => {
        // prevent default para evitar recargar la página
        event.preventDefault();
        // Utilizamos nuestra función para añadir nuestro TODO
        addTodo(newTodoValue);
        // Cerramos nustro modal
        setOpenModal(false);
        // También estaría bien resetear nuestro formulario
        setNewTodoValue("");
    };

    return (
        <div className="contentFormAdd m-5 p-5">
            <form className="TodoForm-form" onSubmit={onSubmit}>
                <p>Escribe tu nueva tarea.</p>
                <textarea
                    value={newTodoValue}
                    onChange={onChange}
                    className="form-control"
                />
                <div className="TodoForm-buttonContainer">
                    <button
                        type="button"
                        className="TodoForm-button TodoForm-button--cancel"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="TodoForm-button TodoForm-button--add"
                    >
                        Añadir
                    </button>
                </div>
            </form>
        </div>
    );
};

export { FormAdd };
