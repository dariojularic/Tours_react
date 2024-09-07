import { useState } from 'react'
import './App.css'

function App() {
  const [tours, setTours] = useState();

  return (
    <>
      <div className="container">
        <h1>Our Tours</h1>
        <ul className="tours-list">
          
        </ul>
      </div>
    </>
  )
}

export default App
