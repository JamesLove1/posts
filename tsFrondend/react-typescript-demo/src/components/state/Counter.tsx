import { useReducer } from "react";

type CountState = {
    count : number
}

type UpdateAction = {
    type: "increment"| "decrement",
    payload: number
}

type ResetAction = {
    type:  "reset",
}

type CounterAction = UpdateAction | ResetAction

const intalState = {count:0};

function reducer(state:CountState, action: CounterAction){
    switch (action.type) {
        case "increment":
            return {count: state.count + action.payload}
        case "decrement":
            return {count: state.count - action.payload}
        case "reset":
            return intalState
        default:
            return state
    }
}

export default function Counter() {

  const [state, dispatch] = useReducer(reducer, intalState);

  return (
    <>
        Count: {state.count}
        <button onClick={()=> dispatch({type: "increment", payload:10})}>
            Increment 10
        </button>
        <button onClick={()=> dispatch({type: "decrement", payload:10})}>
            Decrement 10
        </button> 
        <button onClick={()=> dispatch({type: "reset"})}>
            Reset
        </button> 
    </>
  )
}
