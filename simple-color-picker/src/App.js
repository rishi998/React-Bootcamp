import { useState } from 'react';
import './App.css';
const colors=["red","orange",'green','yellow','purple','blue','cyan'];
export default function App(){

  const [bg, setbg]=useState("");
  const [iscoloractive, setiscoloractive]=useState(false);

  function handlebackground(col){
    setbg(col);
    setiscoloractive(()=>!iscoloractive);
  }
  
  return (
    <ColorPallete 
    bg={bg} 
    handlebackground={handlebackground} 
    iscoloractive={iscoloractive}/>
  )
}

function ColorPallete({bg,handlebackground, iscoloractive}){
  return (
    <div style={{background:iscoloractive?"":bg}}>
      {colors.map((color)=><Color color={color} key={color} handlebackground={handlebackground}/>)}
    </div>
  )
}

function Color({color, handlebackground}){
  return (
      <ul style={{listStyleType:'none'}}    className='container'>
      <li style={{background:`${color}`}}className='color-items' onClick={()=>handlebackground(color)}>{color}</li>
      </ul>
  )
}
