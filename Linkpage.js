import React,{Component} from "react";
import './Linkpage.css'
class Linkpage extends Component{
    state={
        firstname:'',
        lastname:'',
        age:'',
        submit:false,
        showage:false
    }
    handleage=()=>{
        this.setState({showage:!this.state.showage});
    }
        handlebutton=()=>{
        this.setState({submit:true})
    }
    handlechange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    

    render(){
        const x=this.state.showage;
        return(
            <div>
                
                <form>
                    {!this.state.submit &&(
                    
                    <div className="link">
                    <label> First Name</label>
                    <input type={'text'} className='age' name='firstname' onChange={this.handlechange} value={this.state.firstname}/><br/>
                    <label>Last Name</label>
                    <input className="age" type={'text'} name='lastname' onChange={this.handlechange} value={this.state.lastname}/> <br/>
                    <label>Age</label>
                    <input className="age" type={'number'} name='age' onChange={this.handlechange} value={this.state.age}/><br/>
                    <button className="submit" onClick={this.handlebutton}>submit</button>    <button className="submit">Reset</button>
                    </div>)}
                    {this.state.submit&&(
                    <div>
                        <lable>Name:{this.state.firstname}{this.state.lastname}</lable><br/>
                            { 
                              x&&
                                <div> <lable>Age:{this.state.age}</lable></div>
                                }
                              
                            
                               <button onClick={this.handleage}>{x?'hide':'show'}</button>
                        
                            
                        
                        
                        </div>)}
                      
                        
                            
                        
                   
                </form>
            </div>
        )
    }
}
export default Linkpage;
