import { Myaction } from "./actions"
export function countreducer(state=0,action){
    switch(action.type){
        case Myaction.Increment:{
            return state+1
        }
        case Myaction.Decrement:{
            return state-1
        }
        default :return state
    }
}