import { useDispatch, useSelector } from "react-redux";
import {DECRE_COUNT} from "../../redux/actions/Action"

function Decrement() {
  const count = useSelector((store) => store.counterReducer.counterNumber);
  const dispatch = useDispatch();

  const ctaHandler=()=>{
      if (count > 0){
          dispatch(DECRE_COUNT(count - 1));
      }else
      return
      
  }
  return( 
        <button onClick={ctaHandler}>--</button>
  )
}
export default Decrement;
