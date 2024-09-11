import { useEffect, useState } from 'react'
import './App.css'
import Tour from "./Tour"

function App() {
  const [tours, setTours] = useState(null);
  const [error, setError] = useState(null);
  const url = "https://www.course-api.com/react-tours-project";
  // const url = "https://restcountries.com/v3.1/all";


  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(url);
  //     // console.log(response)
  //     const data = await response.json();
  //     // console.log(data)
  //     setTours(data);
  //     console.log(tours)
  //     // console.log(json)
  //   } catch (error) {
  //     setError(error)
  //     // console.log(error)
  //   }
  // };
  // fetchData()

  const array = [{id: 1, name: "city"}]
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        // console.log(response)
        const data = await response.json();
        // console.log(data)
        setTours(data);
        console.log(tours)
        // console.log(data)
      } catch (error) {
        setError(error)
        // console.log(error)
      }
    };
    // setTours(array)
    fetchData()
    // console.log(tours)
  }, [])


  if (!tours) return <h1>Loading...</h1>

  console.log(tours)

  return (
    <>
      <div className="container">
        <h1>Our Tours</h1>
        <ul className="tours-list">
          {tours.map(tour => {
            // console.log(tour)
            return <Tour key={tour.id} {...tour}/>
            // return <h1>{tour.name}</h1>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
