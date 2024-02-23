import React, {useState,useMemo} from "react";
function  Child (){
    const [add,setAdd] = useState(0)
    const [substract, setSubstract] = useState(100)


const Multipication = useMemo(function multiply(){
    console.log("multiply function")
    return add*10
},[add])


return(
    <>
    <button onClick={()=>{setAdd(add+1)}}>Addition</button>
    <br></br>
    <span>{add}</span>
    <h1>{Multipication}</h1>
    <button onClick={()=>{setSubstract(substract-1)}}>Substraction</button>
    <br></br>
    <span>{substract}</span>
    
    </>
)
};
export default Child;

