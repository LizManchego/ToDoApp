import React, { useContext, useState } from "react";
import "./getStartedUI.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TodoContext } from "../Context";

const GetStartedUI = () => {
    const [newNameUser, setNameUser] = useState("");
    const { addNameUser, setGetStarted } = useContext(TodoContext);
    const onChange = (event) => {
        setNameUser(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        //setGetStarted(false)
        addNameUser(newNameUser);
        setNameUser("");
        
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="cardGetStarted">
                <h3>¡Organiza tus tareas!</h3>
                <p className="mt-5">¿Cuál es tu nombre?</p>
                <input
                    id="nameUser"
                    type="text"
                    className="form-control"
                    onChange={onChange}
                />
                <button className="btn btn-light mt-4" type="submit">
                    Continuar&nbsp; <FontAwesomeIcon icon={faArrowRight} />{" "}
                </button>
            </div>
        </form>
    );
};

export { GetStartedUI };
