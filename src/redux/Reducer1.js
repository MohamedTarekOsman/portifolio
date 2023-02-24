import { add2y, addy, dely } from "./Actions/ActionTypes";

const Reducer1=(state={x1:2000}, action)=>{
    switch (action.type) {
      case addy:
        return { ...state, x1: state.x1 + 1 };

      case dely:
        return { ...state, x1: state.x1 - 1 };

      case add2y:
        return{...state,x1:state.x1+2}

      default:
        return state;
    }
}
export default Reducer1