import react, { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

//TodoContext =  {Provider, Consumer}
const TodoContext = createContext();

const TodoProvider = props => {
    //1. init LocalStorage
    const {
        item: toDos,
        saveItem: saveTodos,
        loading,
        error
    }  = useLocalStorage('TODOS_V1', []);

    //2. state Buscador
    const [searchValue, setSearchValue] = useState("");
    const filterTodos = searchValue.length > 3 &&
        toDos.filter((todo) => {
            return todo.text.toLowerCase().includes(searchValue.toLowerCase());
        });
    const listTodos = filterTodos.length > 0 ? filterTodos : toDos;
    
    //3. contadores
    const completedTodos = toDos.filter((todo) => todo.completed).length;
    const totalTodos = toDos.length;
    


    
    //4.Eventos Completado y Eliminar    
    const toggleCompleteTodo = (text) => {
        const todoIndex = toDos.findIndex((todo) => todo.text === text);
        const newTodos = [...toDos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = toDos.findIndex((todo) => todo.text === text);
        const newTodos = [...toDos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    //5. state Modal
    const [openModal, setOpenModal] = useState(false);


    //6. ADD toDo
    const addTodo = (text) => {
        const newTodos = [...toDos];
        newTodos.push({
        completed: false,
        text,
        });
        saveTodos(newTodos);//funcion en useLocalStorage
    };


    //7. getDataUser
    const {
        item: nameUser,
        saveItem: setNameUser
    }  = useLocalStorage('NAME_USER', '');
        

    const addNameUser = (text) => {
        const newNameUser = text.toUpperCase()
        setNameUser(newNameUser)
    };

    //6.Set getStarted
    const [getStarted, setGetStarted] = useState(true);
    useEffect(() => {
        const bGetStarted = nameUser.length>0 ? false : true;
        setGetStarted(bGetStarted)
    }, [nameUser])



    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            listTodos,
            toggleCompleteTodo,
            deleteTodo,
            addTodo,
            openModal, 
            setOpenModal,
            nameUser,
            addNameUser,
            getStarted,
            setGetStarted
        }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };