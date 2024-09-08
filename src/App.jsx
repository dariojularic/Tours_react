import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [tours, setTours] = useState(null);
  const [error, setError] = useState(null);
  const url = "https://www.course-api.com/react-tours-project";

  // const a = async () => {
  //   const response = await fetch(url)
  //   console.log(response)
  //   const data = await response.json();
  //   console.log(data)
  // }
  // a()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        // console.log(response)
        const json = await response.json();
        // console.log(json)
        setTours(json);
        console.log(tours)
        console.log(json)
      } catch (error) {
        setError(error)
        console.log(error)
      }
    };
    fetchData()
  }, [])

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
