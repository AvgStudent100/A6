import React,{Component} from "react";
class Name extends Component{
    render(){
        return(
            <div>
                <p> Name :  {this.props.name}  and salary :{this.props.salary}</p></div>
        )
    }
}
export default Name;