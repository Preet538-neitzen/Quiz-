import React from "react";
import ".././assets/style.css";
import Quizbee from "../index1";
import {Button} from '.././quizService/Button'

const Result = ({score, playAgain,runningTime}) => (

 
 
   <div className="score-board">
    <div className="score">You scored {score} / 20 marks!
     
    </div>
    <div className="title">WELL DONE YOU HAVE FINISHED THE QUIZ</div>
   
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>

    
    </div>

);

export default Result;
