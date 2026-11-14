import './App.css'
import Welcome from './Welcome.jsx'

const studentName = "Cathal";
const modules=["Full Stack Development","c/c++","Web Tech"];
const myColor="red";

// excersise variables
const Profile=["Cathal","Factory worker","music"]
const year=2026;
const FavFood=["Pasta","Pizza","Mash"]
const Rnum = Math.floor(Math.random()*101);
//const isloggedIn=True; 

const date=new Date(2026,10,2,10);  //year,month,day time
let currentTime=date.getUTCHours();


const style2={
  color:"blue"
}


function Greet(){
  return "Hello Group B"
}

/*function Welcome1(){
  if(currentTime <5 | currentTime > 12){
    return "Good Morning"
  }
  else if(currentTime >=12 | currentTime < 5){
    return "Good Afternoon"
  }

}*/


function App() {
 

  return (
    <div>
      <h1> My First React app</h1>
      <p> This is React</p>

      <p> Components Make websites easaier to build</p>

      
      <br></br>
      

      <h2> Hello {studentName} </h2>

      <p> 2+3 + {2+3} </p>



      


      <p> {modules[0]} </p>

      <h4 style={{color:"green"}} >React is fun </h4>

      <h4 style={{color:myColor}} >React is fun </h4>

      <h4 style={style2} >React is fun </h4>

     
      

      <p>{currentTime}</p>

      <h3>Excersises</h3>

      <p>{Profile[0]},  {Profile[1]},  {Profile[2]} </p> 

      <p>{year}</p>

      <p>{FavFood[0]},  {FavFood[1]},  {FavFood[2]} </p> 

      <p>{Rnum}</p>

      <Welcome fname= "Stephen" sname="stephens"/>
      <Welcome fname= "tom" sname="stephens"/>
      <Welcome fname= "eoin" sname="stephens"/>

    </div>
  )
}

export default App
