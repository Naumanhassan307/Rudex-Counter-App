
import {useDispatch, useSelector} from "react-redux"
import {INCRE_COUNT} from "../../redux/actions/Action"


function Increment(){
    const count = useSelector((store) => store.counterReducer.counterNumber);
    const dispatch = useDispatch()
    const ctaHandler=()=>{

         if (count < 100) {
           dispatch(INCRE_COUNT(count + 1));
         } else return;
        
    }
    return(
        <button onClick={ctaHandler}>++</button>
    )
}
export default Increment;