import ProgressBar from "./components/ProgressBar";
import './App.css'
import { useEffect, useState } from "react";

const App=()=>{
  const[value,setValue] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setValue((value)=>value+1)
    },100)
  },[])
  return(
    <>
    <h1> ProgressBar</h1>
    <ProgressBar value={value}/>
    </>
  )
}
export default App;