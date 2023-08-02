import React from "react";
import Square from "./Square";
import { useState } from "react";

const Board = () => {

   const [seqVAL , setSeqVAL] = useState(Array(9).fill(null))

   const handleClick = (i) => {
   
   }

   return (
      <div className="container">
         <div className="rows">
            <Square onclick = {()=>handleClick(0)} value = {seqVAL[0]} />
            <Square onclick = {()=>handleClick(1)} value = {seqVAL[1]} />
            <Square onclick = {()=>handleClick(2)} value = {seqVAL[2]}/>
         </div>

         <div className="rows">

            <Square onclick = {()=>handleClick(3)} value = {seqVAL[3]}/>
            <Square onclick = {()=>handleClick(4)} value = {seqVAL[4]}/>
            <Square onclick = {()=>handleClick(5)} value = {seqVAL[5]}/>

         </div>
         <div className="rows">
            <Square onclick = {()=>handleClick(6)} value = {seqVAL[6]}/>
            <Square onclick = {()=>handleClick(7)} value = {seqVAL[7]}/>
            <Square onclick = {()=>handleClick(8)} value = {seqVAL[8]}/>

         </div>
      </div>
   );
}

export default Board;