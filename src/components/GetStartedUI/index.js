import React, { useContext, useState } from "react";
import "./getStartedUI.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TodoContext } from "../Context";

const GetStartedUI = () => {
    const [newNameUser, setNameUser] = useState("");
    const { addNameUser, nameUser } = useContext(TodoContext);
    const onChange = (event) => {
        setNameUser(event.target.value);
        document.getElementById("nameUser").classList.remove("temblor");

    };

    const onSubmit = (event) => {
        event.preventDefault();
         
        if(newNameUser.length < 4){
            document.getElementById("nameUser").classList.add("temblor");
            return false;
        }
        addNameUser(titleCase(newNameUser));
        setNameUser("");
    };

    const titleCase = str => {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
     };

    return (
        <form className="w-100" onSubmit={onSubmit}>
            <div className="cardGetStarted">
                <h3 className="mx-5">¡Organiza tus tareas!</h3>
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
