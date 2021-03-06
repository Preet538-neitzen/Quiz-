import React, { PureComponent, Component } from 'react';
import "./assets/style.css";
import ReactDOM from 'react-dom'
import quizService from './quizService'
import QuestionBox from './components/QuestionBox';
import Result from './components/Result'
import {Button} from './quizService/Button'
import QB from './General'
import QB1 from './Physics'
import QB2 from './Math'


class Quizbee extends Component{
    state={
        questionBank:[],
        score:0,
        responses:0,
        work:null,
        play:false,
        render:-1,
        Toggler:'lets begin',
         status: false,
      runningTime: 0,
      chalu:false,
      chalu1:false,
      chalu2:false,
      mainDisplay:true,
      start:false,
    };
     
        handleReset = () => {
            this.setState({ runningTime: 0, status: false });
          };

    getQuestions=()=>{
        quizService().then(question=>{
            this.setState({
                questionBank:question
            });
        });
    };

    playAgain=()=>{
     this.getQuestions();
       
             
    }
    chaluer=()=>{
      
        this.setState({
         chalu:true,
         mainDisplay:false,
        })
    }
    chaluer1=()=>{
      
        this.setState({
         chalu1:true,
         mainDisplay:false,
        })
    }
    chaluer2=()=>{
      
        this.setState({
         chalu2:true,
         mainDisplay:false,
        })
    }
    play=()=>{
        
        this.setState(state => {
            if (state.status) {
              clearInterval(this.timer);
            } else {
              const startTime = Date.now() - this.state.runningTime;
              this.timer = setInterval(() => {
                this.setState({ runningTime: Date.now() - startTime });
              });
            }
            return { status: !state.status };
          });

        this.setState({play: !this.state.play})
        if(this.state.play===false){
            this.setState({
                Toggler:'Click to pause',
                
            });
        }
        if(this.state.play===true){
            this.setState({
                Toggler:'Click to resume'
            });
        }
    }

    componentDidMount(){
        this.getQuestions();
    }

    computeAnswer=(answer,correctAnswer)=>{
        if(answer===correctAnswer){
            this.setState({
                score:this.state.score +4
            });
        }
        if(answer!==correctAnswer){
            this.setState({
                score:this.state.score -1
            });
        }
      
        this.setState({
            responses:this.state.responses<5? this.state.responses+1 :5
                });
    }


    render(){
         const { runningTime } = this.state; 
    return(
<>
        {this.state.mainDisplay?(<div className="container">  <div>
{this.state.chalu?null:( <div><div className='title'><div classNmae='h1'>Welcome to JEE Mock-Up</div></div>
   <div className='h1'>Choose your field</div>
   <Button onClick={this.chaluer2}>Maths </Button>
  
   <Button  onClick={this.chaluer1}>General</Button> <Button onClick={this.chaluer}>Physics</Button>
 
 
</div>)
           
}
        
       

       </div></div>):null}
       
 {/* Physics  */}
 {this.state.chalu?(<QB1/>):null}
      
      {/* Chem  */}
      {this.state.chalu1?(<QB/>):null}

       {/* Math  */}
       {this.state.chalu2?(<QB2/>):null}
          
      
          </>
        
       
    );
}
}

export default Quizbee