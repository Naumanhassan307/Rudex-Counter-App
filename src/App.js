
import "./App.css";

import Display from "./components/Display/display"

import Decrement from "./components/Decrement/decrement"
import ResetValue from "./components/Reset/reset"
import Increment from "./components/Increment/increment"

function App() {
  return (
    <>
      <h1>REDUX COUNTER </h1>
      <div className="main-div">
       
        <div>
          <Display />
        </div>
        <br />
        <div className="btns">
          <Decrement />
          <ResetValue />
          <Increment />
        </div>
      </div>
    </>
  ); 
    
}

export default App;
