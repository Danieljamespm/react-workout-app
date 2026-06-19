import { useState } from 'react'
import './App.css'

function App() {

  const [workouts, setWorkouts] = useState([])


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


}

export default App
