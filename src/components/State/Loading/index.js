import React from "react";
import "./Loading.css";

const Loading = () => {
    return (
        <div className="cardLoading loading">
            <div className="image"></div>
            <div className="content">
                <h1></h1>
                <h2></h2>
            </div>
        </div>
    );
};

export { Loading };
