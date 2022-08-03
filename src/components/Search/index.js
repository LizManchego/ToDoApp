import react, { useContext} from "react";
import { TodoContext } from "../Context";
import './TodoSearch.css';

const TodoSearch = () => {
    const { searchValue, setSearchValue }  = useContext(TodoContext)

    const onSearchValueChange = (event) => {
        console.log("Completaste el task: " + event.target.value);
        setSearchValue(event.target.value)
    };
    return         <input 
    className="TodoSearch" 
    placeholder="Cebolla" 
    value={ searchValue }
    onChange={onSearchValueChange}/>
    ;
};

export { TodoSearch };
