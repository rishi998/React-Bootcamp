import { useEffect, useState } from 'react'
import './App.css'

export default function App(){
  const [time, settime]=useState(0);
  const [isrunning, setisrunning]=useState(false);
  
  useEffect(()=>{
    let interval;
    if(isrunning){
      interval=setInterval(()=>{
        settime((prevtime)=>prevtime+10);
      },10);
    } else if(!isrunning){
      clearInterval(interval);
    }
    return ()=>clearInterval(interval);
  }, [isrunning]);
  return (
    <>
    <h1>StopWatch</h1>
    <div>
      <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span>
      <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
      <span>{("0"+((time/10)%100)).slice(-2)}:</span>
    </div>
    <div>
      {isrunning?(<button onClick={()=>setisrunning(false)}>Stop</button>):( <button onClick={()=>setisrunning(true)}>Start</button>
      )}
      <button onClick={()=>settime(0)}>Reset</button>
    </div>
    </>
  )
}