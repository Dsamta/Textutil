
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './components/TextForm';
//import About from './components/About';
import Alert from './components/Alert';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";*/


function App() {
  const[mode,setMode]=useState('dark');
  
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      showAlert("!!!Dark mode has been enabled","success");
      document.title="Textutil-Dark mode";
     /* setInterval(() => {
        document.title="Textutil is amazing";
      }, 2000);*/
    }
    else{
      setMode('dark');
      showAlert("!!!Light mode has been enabled","success");
      document.title="Textutil-Light mode";
     // setInterval(() => {
      //  document.title="Textutil is amazing";
      //}, 2000);
    }
  }
  return (
    <>
      
      {/*<Router>*/}
      <Navbar title="Textutils" about="About" mode={mode} toggleMode={toggleMode} /> 
      <Alert alert={alert}/> 
      <div className="container-fluid " style={{color:mode==='dark'?'black':'white',backgroundColor:mode==='dark'?'white':'#033b52'}}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/*<Routes>
          <Route path="/about" element={<About/>}>
            
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}>
            
          </Route>
          
        </Routes>*/}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        </div>
    {/*</Router>*/}
      
   </>
  );
}
Navbar.propTypes={
  title:PropTypes.string.isRequired,
  about:PropTypes.string
}
/*Navbar.defaultProps={
  title:"Enter title here",
  
  about:"Enter about"
}*/
export default App;
