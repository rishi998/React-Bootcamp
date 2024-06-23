
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './App.css';

const notes = [
  { id:1,
    name: "Meeting Notes", 
    description: "Discussion points for the team meeting:\n1. Project updates\n2. Action items\n3. Upcoming deadlines" },

  { id:2,
    name: "Ideas for Project X", 
    description: "Brainstorming ideas for improving Project X:\n1. Feature enhancements\n2. User feedback\n3. Bug fixes" },

  { id:3,
    name: "Shopping List", 
    description: "Items to buy from the grocery store:\n1. Milk\n2. Bread\n3. Eggs\n4. Fruits and vegetables" }
];

export default function App(){

  const [items, setitem]=useState(notes);
  const [newnotename, setnewnotename]=useState("");
  const [newnotedesc, setnewnotedesc]=useState("");

  const [isshow, setisshow]=useState(false);
  const [isopen, setisopen]=useState(false);

  function handlesubmit(e){
    e.preventDefault();

    const newid=uuidv4();

    const newitem={
      id:newid,
      name:newnotename,
      description:newnotedesc,
    }
    setitem([...items, newitem]);
    setnewnotename("");
    setnewnotedesc("");
  }

  function handleopenshownotes(){
    setisshow(true)
  }

  function handleopenform(){
    setisopen(true)
  }
  function handlecloseform(){
    setisopen(true)
  }
  
  function handledeletenote(id){
    setitem(items.filter((note)=>note.id!==id))
  }

  return (
    <>
    <div className='main'>
      <div className='container'>
        <h2>NOTE TAKING APP</h2>
        <p className='start-buttons'>
        <button className='shownote' onClick={handleopenshownotes}>📒Show Notes</ button>

          <button className='addnote' onClick= {handleopenform}>✏️Add Note</button>
          </p>
          {isshow && <Notelist items={items} handledeletenote={handledeletenote}/>}
      </div>
      <div className='container'>
        {isopen && <Addnotes handlesubmit={handlesubmit} handlecloseform={handlecloseform} newnotename={newnotename} newnotedesc={newnotedesc} setnewnotename={setnewnotename} setnewnotedesc={setnewnotedesc}/> }
      </div>
    </div>
    </>
  )
}

function Notelist({items, handledeletenote}){
  return (
  <div className='notelist'>
    {items.map((note)=>(<Noteitems key={note.id} note={note} handledeletenote={handledeletenote}/>))}
  </div>
  )
}

function Noteitems({handledeletenote,note}){

  return (
    <ul style={{listStyleType:'none'}} className='noteitems'>
      <li>
        <p className='topic-items'>
        <h3>{note.name}</h3>
        <button className='btn' onClick={()=>handledeletenote(note.id)}>&times;</button>
        </p>
        <p className='text'>{note.description}</p>
      </li>
      <div id='line'></div>
    </ul>
  )
}
function Addnotes({handlesubmit, newnotename, setnewnotename, newnotedesc, setnewnotedesc}){
  return (
    <form className='form' onSubmit={handlesubmit}>
      <h3>Add a Note</h3>
      <input type='text' placeholder='Name of note..' value={newnotename} onChange={(e)=>setnewnotename(e.target.value)}></input>
      <input type='text' placeholder='Discription..' value={newnotedesc} onChange={(e)=>setnewnotedesc(e.target.value)}></input>
      <button className='addnote' type='submit' >✏️Add</button>
      {/* <button onClick={handlecloseform}>close</button> */}
    </form>
  )
}

