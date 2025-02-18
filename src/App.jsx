import './App.css'
import Singer from './Singer'

function App() {

  const singers = ['Abul', 'Babul','Bulbul', 'Mofijul']
  

  return (
    <>
      <h1>new react app</h1>
      <p>Singers Details</p>
      {
        singers.map((singer,index) => <Singer key={index} singer={singer}></Singer>)
      }
    </>
  )
}

export default App
