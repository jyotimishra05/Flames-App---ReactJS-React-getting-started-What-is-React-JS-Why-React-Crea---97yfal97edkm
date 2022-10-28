import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

      constructor(props){
        super(props);
        this.state={
            firstName:'',
            secondName:'',
            result:''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClear = this.onClear.bind(this);
        this.onCalculateHandler = this.onCalculateHandler.bind(this);
        this.matching = this.matching.bind(this);
      }

      onChangeHandler(event){
         let list = {...this.state};
         list[event.target.name] = event.target.value;
         this.setState(list);
      }

      matching(s1,s2){
        let obj={};
        let count=0;
        for(let i=0;i<s1.length;i++){
            if(obj[s1[i]]){
                obj[s1[i]]+=1;
            }
            else{
                obj[s1[i]]=1;
            }
        }

        for(let i=0;i<s2.length;i++){
            if(obj[s2[i]]){
                obj[s2[i]]-=1;
                count++;
            }
            if(obj[s2[i]]==0){
                delete obj[s2[i]];
            }
        }
        return count;

      }

      onCalculateHandler(){
             if(!this.state.firstName || !this.state.secondName){
                this.setState({
                    ...this.state,
                    result:"Please Enter valid input"
                })
             }else{
                let result = (this.state.firstName.length+this.state.secondName.length)-(this.matching(this.state.firstName,this.state.secondName)*2);
                if(result%6==1){
                    this.setState({
                        ...this.state,
                        result:"Friends"
                    })
                }
                else if(result%6==2){
                    this.setState({
                        ...this.state,
                        result:"Love"
                    })
                }
                else if(result%6==3){
                    this.setState({
                        ...this.state,
                        result:"Affection"
                    })
                }
                else if(result%6==4){
                    this.setState({
                        ...this.state,
                        result:"Marriage"
                    })
                }
                else if(result%6==5){
                    this.setState({
                        ...this.state,
                        result:"Enemy"
                    })
                }else{
                    this.setState({
                        ...this.state,
                        result:"Siblings"
                    })
                }
             }   
      }

      onClear(){
        this.setState({
            firstName:'',
            secondName:'',
            result:''
        });
      }

    render() {
        return(
            <div id="main">
               {/* Do not remove the main div */}
               <h3 data-testid="answer">{this.state.result}</h3>
               First Name:  <input type="text" name="firstName" onChange={this.onChangeHandler} value={this.state.firstName} data-testid="input1"/>
               Second Name: <input type="text" name="secondName" onChange={this.onChangeHandler} value={this.state.secondName} data-testid="input2"/>
               <button onClick={this.onCalculateHandler} data-testid="calculate_relationship">Calculate Relationship Future</button>
               <button onClick={this.onClear} data-testid="clear">Clear inputs and relationship status</button>
            </div>
        )
    }
}


export default App;
