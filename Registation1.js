import React,{Component} from "react";
import './Registation1.css'
class Registation1 extends Component{
    render(){
        return(
            <div className="reg"> 
                <form>
                <h2 className="name">Register new account</h2><br/>
                <input type={'text'} placeholder='FirstName'className="box" />
                <input type={'text'} placeholder='Last Name'className="box"/><br/>
                <input type={'text'} placeholder='Name'className="box1"/><br/>
                <input type={'text'} placeholder='City'className="box1"/><br/>
                <input type={'number'} placeholder='phone number'className="box1"/><br/>
                <input type={'email'} placeholder='Email'className="box1"/><br/>
                <button className="color"> Create Account  </button>

                </form>
            </div>
        )
    }
}
 export default Registation1