import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const students = [
  {"id": 1, "name": "John", },
  {"id": 2, "name": "Emily","roll":"003"},
  {"id": 3, "name": "Michael","roll":"005"},
  {"id": 4, "name": "Sarah","roll":"007"},
  {"id": 5, "name": "David","roll":"009"},
  {"id": 6, "name": "Jessica","roll":"011"},
  {"id": 7, "name": "Daniel","roll":"013"},
  {"id": 8, "name": "Sophia","roll":"015"},
  {"id": 9, "name": "Matthew","roll":"016"},
  {"id": 10, "name": "Olivia","roll":"017"},
  {"id": 11, "name": "Christopher","roll":"019"},
  {"id": 12, "name": "Emma","roll":"021"},
  {"id": 13, "name": "Andrew","roll":"023"},
  {"id": 14, "name": "Madison","roll":"025"},
  {"id": 15, "name": "James","roll":"026"},
  {"id": 16, "name": "Ava","roll":"027"},
  {"id": 17, "name": "Joshua","roll":"029"},
  {"id": 18, "name": "Isabella","roll":"031"},
  {"id": 19, "name": "Ryan","roll":"033"},
  {"id": 20, "name": "Mia","roll":"035"}
]

export default function App(){

  const [newname, setnewname]=useState("");
  const [newroll, setnewroll]=useState("");
  const [items, setitems]=useState(students);
  const [isformopen, setisformopen]=useState(false);
  
  function handlesubmit(e){
    e.preventDefault()

      const newid=uuidv4();
      const newitem={
        id:newid,
        name:newname,
        roll:newroll
      }
      setitems([...items, newitem])
      setnewname("");
      setnewroll("");
  }

  function handleopen(){
    setisformopen(isformopen=>!isformopen)
  }

  return(
    <div className="components1">
      <Studentwebsite items={items} handleopen={handleopen}/>
      {isformopen && <Addstudentform newname={newname} setnewname={setnewname} newroll={newroll} setnewroll={setnewroll} handlesubmit={handlesubmit}/>}
    </div>
  )
}

function Studentwebsite({items, handleopen, setitems}){
  return (
    <div className="container">
      <div className="starttext">
      <h2>Welcome to student website</h2>
      <p>Click on a student to view their profile</p>
      </div>
      <div className="showstudentlist">
        <h3>Show Student 👉</h3>
        <List items={items}/>
      </div>
      <div className="addstudentcontainer">
        <h3>Add student👦</h3>
        <button className="addstudent" onClick={handleopen}>Add</button>
      </div>
      <div className="deletestudentcontainer">
        <h3>Remove student👦</h3>
        <Listremove items={items} setitems={setitems}/>
      </div>
    </div>
  )
}

function Addstudentform({newname, newroll, setnewname, setnewroll, handlesubmit}){
  return (
    <form onSubmit={handlesubmit} className="form">
      <input type="text" placeholder="name" value={newname} onChange={(e)=>setnewname(e.target.value)}></input>
      <input type="text" placeholder="roll" value={newroll} onChange={(e)=>setnewroll(e.target.value)}></input>
      <button type="submit">Submit</button>
    </form>
  )
}
function List({items}){
  return (
    <>
    <select className="dropdown">
      <option value="">Select</option>
      {items.map((s)=><Listitems key={s.id} student={s}/>)}
    </select>
    </>
  )
}
function Listremove({items}){
  return (
    <>
    <select className="dropdown">
      <option value="">Select</option>
      {items.map((st, id)=><Listitems key={st.id} student={st} />)}
    </select>
    </>
  )
}

function Listitems({student}){
  return (
    <>
    <option>{student.name}</option>
    </>
  )
}
