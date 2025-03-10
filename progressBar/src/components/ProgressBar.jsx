import { useEffect, useState } from "react";

const ProgressBar=({value})=>{

    const[percentage,setPercentage] = useState(value);

    useEffect(()=>{
        setPercentage(Math.min(100,Math.max(value,0)))
    },[value])
    return(
        <>
        <div className="progress-container">
            <div className="progress-bar" style={{width:`${percentage}%`}}>{percentage} % </div>
        </div>
        </>
    )
}
export default ProgressBar;