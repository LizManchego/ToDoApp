import React, { useContext} from "react";
import { TodoContext } from "../Context";
import './TodoCounter.css';

const TodoCounter = () => {
    const { completedTodos,totalTodos } = useContext(TodoContext)

    return (
      <h2 className="TodoCounter">Has realizado {completedTodos} de {totalTodos} tareas!</h2>
    ) 
};
  
export { TodoCounter };
  