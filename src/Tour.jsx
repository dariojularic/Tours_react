import { useState } from "react";
import "./Tour.css"

function Tour(props) {
  const [isExpanded, setIsExpanded] = useState(false)
  const {id, name, info, image, price, handleDeleteTour} = props;
  return (
    <li className="list-item">
      <div className="image-container">
        <img className="image" src={image} alt="" />
        <p className="price">${price}</p>
      </div>
      <div className="info-container">
        <h3 className="tour-name">{name}</h3>
        <p className="tour-info">
          {isExpanded ? info : `${info.substring(0, 200)}...`}
          <button className="read-btn" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="not-interested-btn" onClick={() => handleDeleteTour(id)}>Not interested</button>
      </div>
    </li>
  );
}

export default Tour
