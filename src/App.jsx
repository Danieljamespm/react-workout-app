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

  function deleteWorkout(id) {
    setWorkouts(prev =>
      prev.filter(workout => workout.id !== id)
    )
  }

  function toggleWorkout(id) {
    setWorkouts(prev =>
      prev.map((workout) => (
        workout.id === id ? { ...workout, completed: !workout.completed } : workout
      ))
    )
  }

  return (
    <div>
      <h1>WORKOUT APP</h1>

      <div className='workout-container'>
        {workouts.map((workout) => (
          <div key={workout.id} className={`workout-card ${workout.completed ? "completed" : ""}`}>
            {workout.name} / {workout.sets} / {workout.reps}

            <input type="checkbox"
              checked={workout.completed}
              onChange={() => toggleWorkout(workout.id)} />

            <button
              onClick={() => deleteWorkout(workout.id)}
              className='dlt-btn'
            >
              X
            </button>
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
          className='input-form'
        />

        <input type="text"
          value={sets}
          placeholder='How many sets?'
          onChange={(e) => setSets(e.target.value)}
          className='input-form'
        />

        <input type="text"
          value={reps}
          placeholder='How many reps?'
          onChange={(e) => setReps(e.target.value)}
          className='input-form'
        />

        <button
          type='submit'
          className='input-form'
        >
          Add Workout
        </button>

      </form>

    </div>
  )

}

export default App
