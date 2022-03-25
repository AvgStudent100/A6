import React, { Component } from "react";
import Registation from "./Registation";
import Passenger from "./Passenger";
class App extends Component{
  render(){
    return(
      <div>
          <Registation/>
          <Passenger/>
      </div>
    )
  }
} export default App;