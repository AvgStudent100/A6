import React,{Component} from "react";
import Hello from "./Hello" ;
import Working from "./Working";
import Name from "./Name";
import Vote from "./Vote";
import Title from "./Title";
class App extends Component{
  state={
    name:'doodleblue',
    word:'hello'
  }
  handlechange=()=>{
    this.setState({word:"welcome"})
  }
 render(){
   return(
     <div>
       <Name name='praveen' salary={15000}/><br/>
       <Name name='kuamr' salary={170000}/><br/>
       <Name name='yuvaraj' salary={20000}/><br/>
       <Name name='sabari' salary={25000}/><br/>
       <Title name={this.state.name}/><br/>
       <Working name={ this.state.name}/><br/>
       <Hello word={this.state.word}/><br/>
       <button onClick={this.handlechange}>change name</button><br/>
       <br/>
       <Vote/>
       
      </div>
    )
  }
} export default App;