import React from "react";

let p1 = require('./Images/p1.jpg');
let p2 = require('./Images/p2.jpeg');

const Profile = (props) =>{
    return(
        <div className={props.player === 1 ? "player1" : "player2"}>
            <div className="pic"><img src={props.player === 1 ? p1 : p2} alt="pix" className="img" /></div>
            <h1>Player {props.player} : {props.turn} </h1>
        </div>
    );
}

export default Profile;

