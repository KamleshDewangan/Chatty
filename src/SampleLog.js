import React ,{useState,useEffect} from 'react'

function SampleLog() {
    const [count,setCount]=useState("");
    useEffect(()=>{

        console.log("SamplelOg component");
    },[count]);
   
    const clickHandler=()=>{
        alert();
        setCount("done");
    }
    return (
    setCount=="done"?<h3>hello done</h3>:(  <div>
        <button onClick={clickHandler}>Click</button>
    </div>)
      
    )
}

export default SampleLog
