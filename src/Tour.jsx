import { useState } from "react";
import "./Tour.css"

function Tour(props) {
  const [isExpanded, setIsExpanded] = useState(false)
  // const [interested, setInterested] = useState(true)
  // samo filtriram, ne treba funkcija

  const {id, name, info, image, price, handleDeleteTour} = props;
  console.log(props)
  return (
    <li className="list-item">
      <div className="image-container">
        <img className="image" src={image} alt="" />
        <p className="price">${price}</p>
      </div>
      <div className="info-container">
        <h3 className="tour-name">{name}</h3>
        <p className="tour-info">{info} <button className="read-btn"> Read More</button></p>
        <button className="not-interested-btn" onClick={() => handleDeleteTour(id)}>Not interested</button>
      </div>
    </li>
  );
}

export default Tour
