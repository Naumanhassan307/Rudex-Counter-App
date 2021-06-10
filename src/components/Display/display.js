import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./update.css"

import { useSelector } from "react-redux";


function Display() {


     const count = useSelector((store) => store.counterReducer.counterNumber);
     console.log("store is =>", count);
  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar value={count} maxValue={100} text={count}  className="update"/>
    </div>
  );
}
export default Display;