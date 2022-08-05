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
    let listTodos = filterTodos.length > 0 ? filterTodos : toDos;
    
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
    
    const pinupTodo = (text) => {
        const todoIndex = toDos.findIndex((todo) => todo.text === text);
        const newTodos = [...toDos];
        newTodos[todoIndex].pinup = !newTodos[todoIndex].pinup;
        saveTodos(newTodos);
    };

    //5. state Modal
    const [openModal, setOpenModal] = useState(false);


    //6. ADD toDo
    const addTodo = (text) => {
        const newTodos = [...toDos];
        newTodos.push({
        completed: false,
        pinup: false,
        text,
        });
        saveTodos(newTodos);//funcion en useLocalStorage
    };


    //7.Set getStarted
    const [getStarted, setGetStarted] = useState(false);

    //8. getDataUser
    const {
        item: nameUser,
        saveItem: setNameUser
    }  = useLocalStorage('NAME_USER', '');

        

    const addNameUser = (text) => {
        const newNameUser = text
        setNameUser(newNameUser)
        setGetStarted(false)
    };


    useEffect(() => {
          const bGS = nameUser.length == 0 ? true : false
          setGetStarted(bGS)
    }, [nameUser])
      

    
    
    const NOTCompleted = listTodos.filter((todo) => !todo.completed);
    const Completed = listTodos.filter((todo) => todo.completed);
    listTodos = [...NOTCompleted, ...Completed];

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
            setGetStarted,
            pinupTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };