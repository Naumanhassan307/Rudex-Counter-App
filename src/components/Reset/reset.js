
import { useDispatch} from "react-redux";
import { RESET_COUNT } from "../../redux/actions/Action";

function Reset() {
    const dispatch= useDispatch()
    const ctaHandler=()=>{
        dispatch(RESET_COUNT(0))
    }
  return <button onClick={ctaHandler}>Reset</button>;
}
export default Reset;
