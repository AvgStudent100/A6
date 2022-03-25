import React,{Component} from "react";
import './Arithmetic.css'
class Arithmetic extends Component{
    state={
        Age:20
    }

    render()
    {
        return(
        <div>
            <b className="name">My Name Is <u>Praveen Kumar s</u></b>
            <h2 className="age">Age is {this.state.Age}</h2>
        
        </div>
        )
    }
} export default Arithmetic;
