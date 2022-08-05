import react, { useContext } from "react";
import { TodoContext } from "../Context";
import "./TodoSearch.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoSearch = () => {
    const { searchValue, setSearchValue } = useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log("Completaste el task: " + event.target.value);
        setSearchValue(event.target.value);
    };

    return (
       
            <input
                type="text"
                className="form-control TodoSearch"
                placeholder="Buscar"
                value={searchValue}
                onChange={onSearchValueChange}
                aria-describedby="basic-addon2"
            />
    );
};

export { TodoSearch };
