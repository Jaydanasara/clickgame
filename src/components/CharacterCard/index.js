import React from "react";
import "./style.css";

function Charactercard(props) {

    const { image, name, handleClick,id,clicked } = props
    return (


        <div onClick={() => handleClick (id,clicked)} className="character">
            <div className="images">
                <img alt={name} src={image} />
            </div>
            <div className="hero">{name} </div>

        </div>
    );
}


export default Charactercard; 