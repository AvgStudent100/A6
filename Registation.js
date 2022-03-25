import React,{Component} from "react";
import './Registation.css';
class Registation extends Component{
  state={
    firstname:'',
    lastname:'',
    dob:'',
    email:'',
    submit:false
  }
   handlebtn=()=>{
     this.setState({submit:true})
   }
   handlechange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
   }
    render(){
        return(  
            <div>
              {!this.state.submit &&(
            <div class="form">
              <div class="row-1">
                <div class="div-title">
                  <label class="label-title">Title</label>
                  <div>
                    <select class="title-dropdown" onChange={this.handlechange} value={this.state.source}>
                      <option>Mr.</option>
                      <option>Ms.</option>
                      <option>Mrs.</option>
                    </select>
                  </div>
                </div>
                <div class="div-firstname">
                  <label class="label-firstname">First Name </label>
                  <div>
                    <input type={"text"}  name="fristname" class="input-firstname" onChange={this.handlechange} value={this.state.firstname}></input>
                  </div>
                </div>
    
                <div class="div-lastname">
                  <div>
                    <label class="label-lastname">Last Name</label>
                  </div>
                  <input type="text" name="lastname" class="input-lastname" onChange={this.handlechange} value={this.state.lastname}></input>
                </div>
              </div>
              <div class="row-2">
                <div class="div-dateofbirth">
                  <div>
                    <label class="label-dateofbirth">Date of Birth</label>
                  </div>
                  <input type="date" name="dob" class="input-dateofbirth" onChange={this.handlechange} value={this.state.dob}></input>
                </div>
                <div class="div-email">
                  <div>
                    <label class="label-email">Email</label>
                  </div>
                  <input type="email" name="" class="input-email" onChange={this.handlechange} value={this.state.email}></input>
                </div>
              </div>
              <div class="row-3">
                <div class="div-password">
                  <div>
                    <label class="label-password">Password</label>
                  </div>
                  <input type="password" name="password" class="input-password" ></input>
                  
                </div>
    
                <div class="div-confirmpassword">
                  <div>
                    <label class="label-confirmpassword" >Confirm Password</label>
                  </div>
                  <input type="password" name='confrimpassword' class="input-confirmpassword"></input>
                </div>
              </div>
              <div class="div-checkbox">
                <input type="checkbox"></input>
                <label>Accept Terms & Conditions</label>
              </div>
              <div>
                <button name=" submit" onClick={this.handlebtn}>submit</button>
                <button>reset</button> 
                
                            
            </div>
            </div>)}
            {this.state.submit&& (
            <div>
              <label>Name:{this.state.firstname}{this.state.lastname}</label><br/>
              <label>DOB:{this.state.dob}</label><br/>
              <label>Email:{this.state.email}</label>


            </div>)}

          </div>
        )
    }
}
 export default Registation