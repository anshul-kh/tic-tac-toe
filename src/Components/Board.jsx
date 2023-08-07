import React from "react";
import Square from "./Square";
import { useState } from "react";
import Profile from "./Profile";
import { Player } from "@lottiefiles/react-lottie-player";
import Winner from "./Images/winner.json";
const Board = () => {

   const [seqVAL , setSeqVAL] = useState(Array(9).fill(null));
   
   const [isXNext , setIsXNext] = useState(false);

   const checkWinner= () =>{
      const Winner = [
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [2,4,6]
      ];

      for (let logic of Winner ){
         const [a,b,c] = logic;
         if (seqVAL[a] !== null && seqVAL[a]===seqVAL[b] && seqVAL[a]===seqVAL[c]){
            return seqVAL[a];
         }

         
      };

      return false;
   
   }


   const handleClick = (i) => {
       const copyState = [...seqVAL];
       copyState[i] = isXNext ? "X" : "0";
       setSeqVAL(copyState);
       setIsXNext(!isXNext);
       
   }
 
   const isWinner = checkWinner();
   return (
     <div className="system">
      {
         isWinner ? (
            <>
            <div className="anim">
               <Player autoplay loop src={Winner}/>
            </div>
            <h1>{isWinner === "0" ? "Player 1" : "Player 2"} is the winner</h1>
            </>
         ) : (
            <>
             <Profile player={1} turn={isXNext ? "Please Wait" : "Your Turn" } />
            <div className="container">
            <div className="rows">
               <Square  onclick = {()=>handleClick(0)} value = {seqVAL[0]} />
               <Square  onclick = {()=>handleClick(1)} value = {seqVAL[1]} />
               <Square  onclick = {()=>handleClick(2)} value = {seqVAL[2]}/>
            </div>
   
            <div className="rows">
   
               <Square onclick = {()=>handleClick(3)} value = {seqVAL[3]}/>
               <Square onclick = {()=>handleClick(4)} value = {seqVAL[4]}/>
               <Square onclick = {()=>handleClick(5)} value = {seqVAL[5]} />
   
            </div>
            <div className="rows">
               <Square onclick = {()=>handleClick(6)} value = {seqVAL[6]}/>
               <Square onclick = {()=>handleClick(7)} value = {seqVAL[7]}/>
               <Square onclick = {()=>handleClick(8)} value = {seqVAL[8]}/>
   
            </div>
         </div>
         <Profile player={2} turn={!isXNext ?"Please Wait" : "Your Turn" } />
         </>
         
         )
     }
     </div>
   );
}

export default Board;