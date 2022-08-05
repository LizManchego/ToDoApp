import react, { useState, useContext } from "react";
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
import { GetStartedUI } from "../components/GetStartedUI";
import "./App.css";

function AppUI() {
    const {
        error,
        loading,
        listTodos,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        nameUser,
        getStarted,
        pinupTodo
    } = useContext(TodoContext);

    const cantPinUp = listTodos.filter((todo) => todo.pinup).length;
    const cantNOTPinUp = listTodos.filter((todo) => !todo.pinup).length;

    return (
        <react.Fragment>
            {!getStarted && (
                <div className="appUI">
                    <div className="appUI-header mb-5 pb-5">
                        <TodoCounter />
                        <TodoSearch />
                    </div>
                    {!loading && !listTodos.length && <Empty />}

                    {cantPinUp > 0 && (
                        <><TodoList><p className="TitleUrg">Urgentes:</p>
                            {error && <Error />}
                            {loading && <Loading />}
                            {listTodos
                                .filter((todo) => todo.pinup)
                                .map((todo) => (
                                    <TodoItem
                                        key={todo.text}
                                        text={todo.text}
                                        completed={todo.completed}
                                        pinup={todo.pinup}
                                        onComplete={() => toggleCompleteTodo(todo.text)}
                                        onDelete={() => deleteTodo(todo.text)}
                                        onPinUp={() => pinupTodo(todo.text)} />
                                ))}
                        </TodoList><hr className="separator"></hr></>
                    )}


                    {cantNOTPinUp > 0 && (
                        <><TodoList>
                            {error && <Error />}
                            {loading && <Loading />}
                            {listTodos
                                .filter((todo) => !todo.pinup)
                                .map((todo) => (
                                    <TodoItem
                                        key={todo.text}
                                        text={todo.text}
                                        completed={todo.completed}
                                        pinup={todo.pinup}
                                        onComplete={() => toggleCompleteTodo(todo.text)}
                                        onDelete={() => deleteTodo(todo.text)}
                                        onPinUp={() => pinupTodo(todo.text)} />
                                ))}
                        </TodoList></>
                    )}

                    <CreateTodoButton />
                </div>
            )}
            {!getStarted && openModal && (
                <Modal>
                    <FormAdd />
                </Modal>
            )}

            {getStarted && <GetStartedUI />}
        </react.Fragment>
    );
}

export { AppUI };
