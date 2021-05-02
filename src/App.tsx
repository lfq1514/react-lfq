import React, { useEffect } from 'react';
import './App.css';

import { useHistory } from "react-router-dom";


function App() {

  useEffect(()=>{


  },[])
  const history=useHistory()
  const toHooksPage=()=>{
    history.push('./hooksPage')
  }
  return (
    <div className="App">
     <div onClick={()=>{toHooksPage()}}>跳转到react-hooks页面</div>
    </div>
  );
}

export default App;
