export const Myaction={
    Increment:'Increment',
    Decrement:'Decrement'
}

export const Incrementaction=()=>{
    return {type:Myaction.Increment}
}
export const Decrementaction=()=>{
    return {type:Myaction.Decrement}
}
