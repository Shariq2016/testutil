// import logo from "./logo.svg";
import React,{useState} from 'react'
import "./App.css";
import Alert from './components/Alert';
import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import Texte from "./components/Texte";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState("light")
  const [alert,setalert]=useState(null)
 
 
  const showalert=(type,msg)=>
  {
    setalert({
type:type,
msg:msg,
    })
  setTimeout(() => {
    setalert(null)
  }, 3000);}




  let toggle1=()=>
  {
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor="#181c45"
      showalert("success","Darkmode Enabled")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="white"
      showalert("success","Darkmode Disabled")
    }
  }
  let toggle=()=>
  {console.log("pressed")
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor="#1d6131"
      showalert("success","Greenmode Enabled")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="white"
      showalert("success","Greenmode Disabled")
    }
  }
  return (
    <>
    
    <Router>
    
    <Navbar title='hello' About="About" mode={mode} toggle={toggle} toggle1={toggle1}/>
    <Alert alert={alert} />
    <div className='container my-3'>
    <Routes>
    <Route exact path="/about" element={  <Aboutus /> } ></Route>
   
   <Route  path="/" element={ <div className='container>'><Texte showalert={showalert} heading="Enter text Here" mode={mode}/></div> } ></Route>
    
     
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
