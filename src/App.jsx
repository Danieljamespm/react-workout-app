import { useState } from 'react'
import './App.css'

function App() {

  const [workouts, setWorkouts] = useState([])
  const [name, setName] = useState("")
  const [sets, setSets] = useState("")
  const [reps, setReps] = useState("")


  function addWorkout() {
    const newWorkout = {
      id: Date.now(),
      name,
      sets: Number(sets),
      reps: Number(reps),
      completed: false
    }
    setWorkouts(prev => [...prev, newWorkout])
  }

  return (
    <div>
      <h1>WORKOUT APP</h1>

      <div>
        {workouts.map((workout) => (
          <div key={workout.id}>
            {workout.name} / {workout.sets} / {workout.reps}
          </div>
        ))}
      </div>

    </div>
  )

}

export default App
