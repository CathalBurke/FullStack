import { useState } from 'react'
import './App.css'

function App() {

  // input states
  const [studentName, setStudentName] = useState("");
  const [grade, setGrade] = useState("");

  // list of students
  const [students, setStudents] = useState([]);

  // add a student to the list
  const addStudent = () => {
    const newStudent = { name: studentName, grade: Number(grade) };
    setStudents([...students, newStudent]);
    setStudentName("");
    setGrade("");
  };

  // remove a student using filter
  const deleteStudent = (indexToDelete) => {
    setStudents(students.filter((student, index) => index !== indexToDelete));
  };

  // pick label and colour for a grade
  const getResult = (grade) => {
    if (grade >= 70) return { label: "First Class", color: "blue" };
    if (grade >= 40) return { label: "Pass", color: "green" };
    return { label: "Fail", color: "red" };
  };

 const clearStudents = () => {
   setStudents([]);
 }

  // total and average
  const total = students.reduce((sum, student) => sum + student.grade, 0);
  const average = students.length > 0 ? total / students.length : 0;

  return (
    <>
      <h1>Student Grade Tracker</h1>

      {/* inputs */}
      <input type="text" placeholder="Student Name" value={studentName} onChange={(event) => setStudentName(event.target.value)} />
      <input type="number" placeholder="Grade" value={grade} onChange={(event) => setGrade(event.target.value)} />
      <button onClick={() => addStudent()}>Add Student</button>
      <button onClick={() => clearStudents()}> Clear all</button>

      <hr />

      {/* stats */}
      <h2>Statistics</h2>
      <p>Number of Students: {students.length}</p>
      <p>Average Grade: {average.toFixed(2)}</p>

      <hr />

      {/* student list */}
      <h2>Students</h2>
      {students.map((student, index) => {
        const result = getResult(student.grade);
        return (
          <div key={index}>
            <b>{student.name}</b> - {student.grade}{" "}
            <span style={{ color: result.color, margin: "0 8px" }}>{result.label}</span>
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default App