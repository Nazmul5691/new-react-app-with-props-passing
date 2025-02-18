import './App.css'
import Singer from './Singer'
import Students from './Student'

function App() {

  const singers = ['Abul', 'Babul', 'Bulbul', 'Mofijul']

  const students = [
    {name: 'Raju', age: 20, Grade: 10},
    {name: 'Paju', age: 20, Grade: 10},
    {name: 'Saju', age: 20, Grade: 10}
  ]

  return (
    <>
      <h1>new react app</h1>
      <p>Singers Details</p>
      {
        singers.map((singer, index) => <Singer key={index} singer={singer}></Singer>)
      }

      {
        students.map((student, index) => <Students key={index} student = {student}></Students>)
      }
    </>
  )
}

export default App
