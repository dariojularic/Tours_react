import { useEffect, useState } from 'react'
import './App.css'
import Tour from "./Tour"

function App() {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);
  const url = "https://www.course-api.com/react-tours-project";

  // handle delete tour, set Tours
  function handleDeleteTour(id) {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTours(data);
      } catch (error) {
        setError(error)
      }
    };
    fetchData()
  }, [])


  if (!tours) return <h1>Loading...</h1>

  // console.log(tours)

  return (
    <>
      <div className="container">
        <h1 className="header">Our Tours</h1>
        <div className="title-underline"></div>
        {error && <p>Error: {error.message}</p>}
        <ul className="tours-list">
          {tours.map(tour => {
            return <Tour key={tour.id} handleDeleteTour={handleDeleteTour} {...tour}/>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
