import React, { Component } from 'react'

 class Tourchild extends Component {
     state={
         submit:false,
         clear:true
     }
     handleSubmit=()=>{
        this.setState({submit:!this.state.submit}) 
        this.setState({info:''})
      }
      handleclear=()=>{
          this.setState({clear:!this.state.clear})
      }
  
      
  render() {
    const a=this.state.clear;
    return (
      <div>
            {!this.state.submit&&(
                            <div> 
 
                                <img class="singleimg" src={this.props.image} /> 
 
                                <div> 
                                    
                                    <div class="size" > 
                                        <div class="row"> 
                                            <div class="col"> 
                                                <h5 class=" text text-start">{this.props.name}</h5></div> 
 
                                            <div> 
                                                <h5 class="txt text text-end">${this.props.price}</h5></div> 
                                                </div> 
                                                
                                            <div class = " info"> <p>{this.state.clear?this.props.info.slice(0,150):this.props.info}<button onClick={this.handleclear}>{a?'readmore':'readless'}</button></p></div>
                                            <div class="text text-center"><button type="button" class="btn btn-outline-secondary btn-sm" onClick={this.handleSubmit}>Not Interested</button></div> 
                                         
                                     
                                </div> 
                            </div> 
                        </div>)} 
      </div>
    )
  }
}

export default Tourchild