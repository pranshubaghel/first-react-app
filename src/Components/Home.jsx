import React, { useState } from "react";
const Home = ()=>{
    const[count,setCount]= useState(1);
    const Increment = ()=> {
        setCount(count + 1)
    }

    const Decrement = () =>{
        setCount(count - 1)
    }

    const Square = () => {
        setCount(count * count)
    }

    return(
        <>
        <h1>Number is === {count}</h1>
        <button onClick={()=>Increment()}>Increment</button>
        <button onClick={()=>Decrement()}>Decrement</button>
        <button onClick={()=>Square()}>Square</button>

        </>
    )
};

export default Home;


    
  