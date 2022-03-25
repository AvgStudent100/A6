import React,{Component} from "react";
import Arithmetic from "./Arithmetic";
import './hello.css';
import Count from "./Count";
import Contact from './Contact';
import Registation1 from "./Registation1";
import Welcome from "./Welcome";
class Hello extends Component{
  render(){
    return(
      <div>
        <h3 className='title' > Hello world</h3>
        <Arithmetic/>
        <Count/>
        <Contact/>
        <Registation1/>
        <Welcome/>
      </div>
    )
  }
} export default Hello;