import React,{Component} from'react';
import './vote.css';
class Vote extends Component{
    state={
        c:0,
        cplusplus:0,
        java:0,
        python:0
    }
    handlevote=()=>{
        this.setState({c:this.state.c+1})
    }
    handlecplus=()=>{
        this.setState({cplusplus:this.state.cplusplus+1})
    }
    handlejava=()=>{
        this.setState({java:this.state.java+1})
    }
    handlepython=()=>{
        this.setState({python:this.state.python+1})
    }
    render(){
    
        return(
            <div className='vote'>
                 <lable><b>c:{this.state.c}</b></lable> 
                 <button className='votebtn' onClick={this.handlevote}> vote</button>
               <br></br>  
            <label><b>c++:{this.state.cplusplus}</b></label>
            <button className='votebtn' onClick={this.handlecplus}> vote</button>
            <br></br>
            <label><b>java:{this.state.java}</b></label>
            <button className='votebtn' onClick={this.handlejava}> vote</button>
            <br></br>
            <label><b>python:{this.state.python}</b></label>
             <button   className='votebtn' onClick=    {this.handlepython}> vote</button>

            </div>
        )
    }
}
export default Vote;