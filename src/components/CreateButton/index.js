import react, {useContext} from "react";
import { TodoContext } from "../Context";
import "./CreateTodoButton.css";

const CreateTodoButton = () => {
    const { openModal, setOpenModal } = useContext(TodoContext)

    const onClickButton = () => {
        setOpenModal(!openModal);
      };
    
      return (
        <button className="CreateTodoButton" onClick={onClickButton}>
          +
        </button>
      );
};

export { CreateTodoButton };
