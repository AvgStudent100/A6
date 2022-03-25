import React,{Component} from "react";
import Linkpage from "./Linkpage";
import Passenger from "./Passenger";
import Registation from "./Registation";
class App extends Component{
  render(){
    return(
      <div> 
        <Passenger/>
        <Linkpage/>
        <Registation/>
       </div>
    )
  }
}
 export default App