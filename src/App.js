//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [toggelColor, setToggelColor] = useState('dark')
  const [toggleGreenMode, setToggleGreenMode] = useState('white')
  const [alert,setAlert]= useState(null)
  const  showAlert=(message,type)=>
  {
    setAlert(
      {
        msg:message,
        type:type
      });
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      setToggelColor('light');
      document.body.style.backgroundColor='#230f59';
      showAlert("Dark Mode is enabled","success");
      document.title="Dark Mode is enabled";
    }
    else 
    {
      setMode('light');
      setToggelColor('dark');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is enabled","success");
      document.title="Light Mode is enabled";
    }
  }
 const toggleGreenModeOn=()=>
  {
    if(toggleGreenMode==='green')
    {
      setToggleGreenMode('white');
     
      document.body.style.backgroundColor='white';
      showAlert("Green Mode is de-enabled","success");
      document.title="Light Mode is enabled";
    }
    else 
    {
      setToggleGreenMode('green');
      document.body.style.backgroundColor='green';
      showAlert("Green Mode enabled","success");
      document.title="Green Mode is enabled";
    }
  }
  
 
  return (
      <>
      <BrowserRouter>
      <div className="container my-3"  >
      
      <Navbar title="React App Demo"  mode={mode} toggleMode={toggleMode}  toggleGreenModeOn={toggleGreenModeOn} toggelColor={toggelColor}/>
      <Alert  alert={alert}/>
      <Routes>
        <Route path="/" element={''}>
          <Route index path="/about" exact element={<About />} />
          <Route path="textutills" exact element={<TextForm showAlert={showAlert} toggleGreenMode={toggleGreenMode} formTitle="Enter Your Text To Analyze Below" preview="Enter Your Text To Preview" mode={mode}/>} />
          <Route path="*" element={''} />
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
      </>  
    );
}

export default App;
