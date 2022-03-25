import React,{Component} from 'react';
import'./count.css'
class Increment extends Component{
    state={
        count:0
    }
    handleIncreament=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecreament=()=>{
        this.setState({count:this.state.count-1})
    }
    render(){
        return(
            <div>
                <h2>count :  {this.state.count}</h2>
                <button className='add' onClick={this.handleIncreament}>Increment</button>
                <button className='sub' onClick={this.handleDecreament}>Decrement</button>
                
            </div>
        )
    }

}
export default Increment;