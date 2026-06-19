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

      <form onSubmit={(e) => {
        e.preventDefault()
        addWorkout()
        setName("")
        setSets("")
        setReps("")
      }}>

        <input type="text"
          value={name}
          placeholder='Enter Workout Name'
          onChange={(e) => setName(e.target.value)}
        />

        <input type="text"
          value={sets}
          placeholder='How many sets?'
          onChange={(e) => setSets(e.target.value)}
        />

        <input type="text"
          value={reps}
          placeholder='How many reps?'
          onChange={(e) => setReps(e.target.value)}
        />

        <button type='submit'>
          Add Workout
        </button>

      </form>

    </div>
  )

}

export default App
