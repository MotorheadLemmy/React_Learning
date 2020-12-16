
import { getAuthUserData } from "./auth-reducer"

const INITIALIZED_SUCCESS='INITIALIZED_SUCCESS'

let initialState={
  initialized:false,
 
  }
const appReducer=(state=initialState,action)=>{
    switch (action.type){
        case INITIALIZED_SUCCESS:
          return {
            ...state,
            initialized:true
         }
        default:
            return state    
    }
}
export const initializeSuccess=()=>{
    return{
      type:INITIALIZED_SUCCESS}
    }
  

  export const initializeApp=()=>(dispatch)=>{
    let promise=dispatch(getAuthUserData())
    //dispatch(getAuthUserData())
    //dispatch(getAuthUserData())
    Promise.all([promise])
    .then(()=>{
      dispatch(initializeSuccess())
    })
    }
   

  

export default appReducer