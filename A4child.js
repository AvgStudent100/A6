import React,{Component} from "react";
class A4child extends Component{
    state={
        submit:false,
    }



    handleclear=()=>{
        this.setState({submit:!this.state.submit}) 
        this.setState({info:''})
      }
    render(){
        const q=this.state.submit;
        return(
            <div>
                
<div ><h6 className="subdiv4">{this.props.title }  <button className="btnplus" name="submit" onClick={this.handleclear}>{q?'-':'+'}</button> </h6></div>
                        {q&&(
                        <div><p>{this.props.info}</p></div>)}
                        
            </div>
        )
    }
} export default A4child