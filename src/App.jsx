import './App.css'
import Friends from './Friends'
import Singer from './Singer'
import State from './State'
import Students from './Student'
import Team from './Team'

function App() {

  const singers = ['Abul', 'Babul', 'Bulbul', 'Mofijul']

  const students = [
    { name: 'Raju', age: 20, Grade: 10 },
    { name: 'Paju', age: 20, Grade: 10 },
    { name: 'Saju', age: 20, Grade: 10 }
  ]

  return (
    <>
      <h1>new react app</h1>
      <Friends />
      <h2>Use state</h2>
      <State />
      <h3>Add Players</h3>
      <Team />
      <p>Singers Details</p>
      {
        singers.map((singer, index) => <Singer key={index} singer={singer}></Singer>)
      }

      {
        students.map((student, index) => <Students key={index} student={student}></Students>)
      }
    </>
  )
}

export default App
