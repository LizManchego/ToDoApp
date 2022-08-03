import react, { useState, useContext} from "react";
import { TodoContext } from "../components/Context";
import { TodoCounter } from "../components/Counter";
import { TodoSearch } from "../components/Search";
import { TodoList } from "../components/List";
import { TodoItem } from "../components/List/Item";
import { CreateTodoButton } from "../components/CreateButton";
import { FormAdd } from "../components/FormAdd";
import { Modal } from "../components/Modal";
import { Empty } from "../components/State/Empty";
import { Error } from "../components/State/Error";
import { Loading } from "../components/State/Loading";


function AppUI() {
    const {error, loading, listTodos, toggleCompleteTodo, deleteTodo, openModal, addTodo} = useContext(TodoContext)
    return (
        <react.Fragment>
            <TodoCounter />
            <TodoSearch/>
            <TodoList>
                {error && <Error/>}
                {loading && <Loading/>}
                {(!loading && !listTodos.length) && <Empty/>}
                {listTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => toggleCompleteTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />
            {openModal && (
                <Modal>
                    <FormAdd/>
                </Modal>
            )}
        </react.Fragment>
    );
}

export { AppUI } ;
