import React from "react";

const  Square = (props) => {
    return(
        <div className="square" style={{ border:"1px solid", 
        display:"flex" ,
        justifyContent : "center", 
        alignItems: "center",
        fontSize: "50px",
        backgroundColor: props.value === "X" ? "#6fd6cf3c" : "#1D1E27"
     }}
        onClick = {props.onclick}>
            <h5>{props.value}</h5>
        </div>
    );
}

export default Square;