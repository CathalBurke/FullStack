import {useState} from 'react';
import './App.css'

function App() {
  const [count, setCount]=useState(0);

  const [isOn, setIsOn]=useState(false);

  const [temp, setTemp]=useState(23);

  const [name,setName]=useState("");

  const [students,setStudents]=useState(["john", "tess", "sarah" ])

  const addStudent=()=>{
    setStudents([...students, "Saoisre" ])
  }

  

 
  return (
    <>
    <div
      style={{
      backgroundColor : isOn ? "white" : "black",
      color : isOn ? "black" : "white",
      padding: "20px",

      }}>

      <h2> Count = {count} </h2>

      <button onClick={()=> setCount(count+1)}> Increment </button>
      <button onClick={()=> setCount(count-1)}> Decrement </button>
      <button onClick={()=> setCount(0)}> Reset </button>
      
      <h3>
        {isOn? "Light ON" : "Light Off" }
      </h3>

      <button onClick={()=> setIsOn(!isOn)}> Toggle </button>

      <br></br>
    </div>

    
    
    <div style={{  backgroundColor : temp < 10 ? "lightblue" : temp <=24 ? "lightgreen" : "orangered" }} >
    
      <h2>
        Tempreture Control Dashboard
      </h2>
    
      <h3> Temperature = {temp} </h3>
      <h4> {temp < 10 ? "Its Cold" : temp <=24 ? "Its Alright" : "Its Roasting"} </h4>

      <button onClick={()=> setTemp(temp+1)}>Warmer</button>
      <button onClick={()=> setTemp(temp-1)}>Cooler</button>
      <button onClick={()=> setTemp(23)}> Reset </button>

      <br></br>
    </div>

    
    
      
    <div>

      <input type="text" value={name} onChange={(event) => setName(event.target.value) }/>

      <h3> Hello {name} </h3>

      <br></br>
    </div>
    <div>
      <h2>Students</h2>

      {students.map((students,index) =>
      (
        <p key={index}> {students} </p>
      ))}

      <button onclick={addStudents}> Add Student </button>

      <br></br>


    </div>
  
  
   
    

    
  </>
  )   
}

export default App

/* count = current value 
0 is the initial value of the count in useState(0)
setcount = function provided by react to update the value of count  
*/