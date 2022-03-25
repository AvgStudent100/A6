import React,{Component} from "react";
class  Title extends Component{
    render(){
        return(
            <div>Company:{this.props.name}</div>
        )
    }
}
export default Title;