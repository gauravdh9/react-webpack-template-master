import React from "react";
import tw, { GlobalStyles } from "twin.macro";
import {connect} from "react-redux"
import { Decrementaction, Incrementaction } from "./redux/actions";

const Main = tw.div`bg-blue-900`;

const mapStatetoProps=(state)=>{
    return {count:state}
}

const mapDispatchtoProps=(dispatch)=>{
    return {Increment:()=>dispatch(Incrementaction),
        Decrement:()=>dispatch(Decrementaction)}
}


const MyApp = ({count,Increment,Decrement}) => {

  return (
    <>
      <GlobalStyles />
      <Main tw="text-white flex items-center flex-col h-screen justify-evenly">
        <div tw="bg-red-500 p-10 rounded ">
          <button onClick={Increment}>Click me </button>
          <button onClick={Decrement}>Click me </button>
        </div>
        <span>{count}</span>
      </Main>
    </>
  );
};

const App=connect(mapStatetoProps,mapDispatchtoProps)(MyApp)

export default App;
