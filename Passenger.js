import React,{Component} from "react";
import './Passenger.css'
class Passenger extends Component{
    state={
        Name:'',
        age:'',
        gender:'',
        source:'',
        destination:'',
        check:false,
        submit:false
    }
    handlechange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
   
        
    }
    handlebutton=()=>{
        
        this.setState({submit:true})
        
    }

    render(){
        return(
            <div>
             <form>
             
            <div className='passenger'>
                
                <h2>Passenger ticket booking</h2>
                <label> Name of Passenger</label>
                <input type={'text'} className='ticket' name="Name" onChange={this.handlechange} value={this.state.Name} /><br/>
                <label>Age</label>
                <input type={'number'} className='ticket' name="age" onChange={this.handlechange} value={this.state.age} /><br/>
                <label>Gender</label>
                <input type={'radio'} name='gender'  className='ticket'  onChange={this.handlechange} value={this.state.gender} />
                <label>Male</label>
                <input type={'radio'} name='gender' className='ticket' onChange={this.handlechange} value={this.state.gender}/>
                <label>Female</label><br/>
                <label>source</label> 
                <select className='ticket' name=" destination" onChange={this.handlechange} value={this.state. destination} >
                    <option > select a starting point</option>
                    <option value={'chennai'}> chennai</option>
                    <option value={'nellore'}> Nellore</option>
                    <option value={'madurai'}> Madurai</option>
                    </select>
                    <br/>
                    <label >Destination</label>
                    <select className='ticket' name="source" onChange={this.handlechange} value={this.state.source} >
                    <option > select a Ending point</option>
                    <option value={'kanchepuram'}> Kanchepuram</option>
                    <option value={'Tada'}> Tada</option>
                    <option value={'kaniyakumari'}> Kaniyakumari</option>
                    </select><br/>
                    <input type={'checkbox'}/><label>I accept all the terms and condition </label><br/>
                    <button className='ticket1' onClick={this.handlebutton}>submit</button>
                </div>    
                   
        </form>
        </div>
        )

    }
}
   export default Passenger