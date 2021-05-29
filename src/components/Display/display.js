import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function Display(){
    return (
      <>
        <div style={{ width: 200, height: 200 }} >
          <CircularProgressbar value={66} text={66} maxValue={100} />
        </div>
      </>
    );
}
export default Display;