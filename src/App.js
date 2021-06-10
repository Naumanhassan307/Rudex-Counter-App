
import "./App.css";
import Decrement from "./components/decrement/Decrement";

import Display from "./components/display/Display"
import Increment from "./components/increment/Increment";
import Reset from "./components/reset/Reset";

function App() {
 
  return (
    <>
      <h1>REDUX COUNTER </h1>
      <div className="main-div">
        <Display />
        <br />
        <Increment />
        <Reset />
        <Decrement />
      </div>
    </>
  ); 
    
}

export default App;
