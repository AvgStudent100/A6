import React,{Component} from "react";
import'./contact.css';
class form extends Component{
    render(){
        return(
            <div className="aaa">
                <form>
                <table>
                    <h2 >Contact Us</h2>
                    <tr>
                    
                    <th> <label>First Name </label></th>
                        <td><input type={"text"} id='fname' placeholder="enter a First Name"></input></td>
                        
                    
                    
                        <th> <label>last Name </label></th>
                        <td><input type={"text"} id='fname'placeholder="enter a Last Name"></input></td>
                    </tr>
                    <tr>
                        <th> <label>Email id </label></th>
                        <td><input type={"text"} id='fname'placeholder="enter a Email Id"></input></td>
                    
                    
                        <th> <label>Company Name * </label></th>
                        <td><input type={"text"} id='fname' placeholder="enter a Company Name" required></input></td>
                    </tr>
                    <tr>
                    
                        <th> <label>Street 1</label></th>
                        <td><input type={"text"} id='fname'placeholder="enter a Street 1"></input></td>
                    
                    
                        <th> <label>City </label></th>
                        <td><input type={"text"} id='fname'placeholder="enter a City"></input></td>
                    </tr>
                    <tr>
                        <th> <label> Pincode </label></th>
                        <td><input type={"text"} id='fname' placeholder="enter a Pincode"></input></td>
                    
                    
                        <th> <label>Topic * </label></th>
                        <td><input type={"text"} placeholder="enter a topic" id='fname' required></input></td>
                    </tr>
                    <tr>
                        <th> <label>Business Phone </label></th>
                        <td><input type={"text"} id='fname' placeholder="enter a Business phone"></input></td>
                    
                    
                        <th> <label>Job title </label></th>
                        <td><input type={"text"} id='fname'placeholder="enter a Job Title"></input></td>
                    </tr>
                    <tr>
                        <th> <label>state </label></th>
                        <td><input type={"text"} id='fname'placeholder="enter a State"></input></td>
                    
                    
                        <th> <label> Country </label></th>
                        <td><input type={"text"} id='fname'placeholder="enter a Country"></input></td>
                    </tr>
                    
                    <button className="submit" >submit</button>
                       
                    
                </table>
                </form>
                </div>
        )
    }
}
export default form;