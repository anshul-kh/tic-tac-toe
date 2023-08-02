import React from "react";

const  Square = (props) => {
    return(
        <div className="square" style={{ border:"1px solid", 
        width: "100%" ,
        height:"100px" ,
        display:"flex" ,
        justifyContent : "center", 
        alignItems: "center" }}
        onClick = {props.onclick}>
            <h5>{props.value}</h5>
        </div>
    );
}

export default Square;