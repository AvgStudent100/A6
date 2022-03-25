import React,{Component} from "react";
import './Registation.css';
class Registation extends Component{
    state={
        password:'',
        confrimpassword:'',
        submit:false
    }
    handlechange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handlesubmit=()=>{
     if(this.state.password===this.state.confrimpassword)
     this.setState({submit:true})
     else
     alert('password and confrim password should match')
    }
    render(){
        return(
            <div>
            <div class="form">
              <div class="row-1">
                <div class="div-title">
                  <label class="label-title">Title</label>
                  <div>
                    <select class="title-dropdown">
                      <option>Mr.</option>
                      <option>Ms.</option>
                      <option>Mrs.</option>
                    </select>
                  </div>
                </div>
                <div class="div-firstname">
                  <label class="label-firstname">First Name </label>
                  <div>
                    <input type="text"  class="input-firstname"></input>
                  </div>
                </div>
    
                <div class="div-lastname">
                  <div>
                    <label class="label-lastname">Last Name</label>
                  </div>
                  <input type="text" class="input-lastname"></input>
                </div>
              </div>
              <div class="row-2">
                <div class="div-dateofbirth">
                  <div>
                    <label class="label-dateofbirth">Date of Birth</label>
                  </div>
                  <input type="date" class="input-dateofbirth"></input>
                </div>
                <div class="div-email">
                  <div>
                    <label class="label-email">Email</label>
                  </div>
                  <input type="email" class="input-email"></input>
                </div>
              </div>
              <div class="row-3">
                <div class="div-password">
                  <div>
                    <label class="label-password">Password</label>
                  </div>
                  <input type="password" name="password" value={this.state.password} onChange={this.handlechange} class="input-password"></input>
                  {this.state.password}{this.state.confrimpassword}
                </div>
    
                <div class="div-confirmpassword">
                  <div>
                    <label class="label-confirmpassword">Confirm Password</label>
                  </div>
                  <input type="password" name='confrimpassword' value={this.state.confrimpassword} onChange={this.handlechange} class="input-confirmpassword"></input>
                </div>
              </div>
              <div class="div-checkbox">
                <input type="checkbox"></input>
                <label>Accept Terms & Conditions</label>
              </div>
              <div>
              <button type="button" class="register-button btn-primary btn-sm " onClick={this.handlesubmit}>submit</button>
              <button type="button" class="btn btn-secondary btn-sm">Reset</button>               
                            
            </div>
            </div>

          </div>
        )
    }
}
 export default Registation