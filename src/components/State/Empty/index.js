import React from "react";
import imgEmpty from '../../../empty.png'
import "./Empty.css";


const Empty = () => {
    return <div className="d-flex justify-content-center align-items-center flex-column">
        <img src={imgEmpty} alt={"empty"} className="imgEmpty"/> 
        <p className=" msgEmpty"> Crea tu primera tarea!</p>
    </div>
};

export { Empty };