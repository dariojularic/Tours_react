import "./Tour.css"

function Tour(props) {
  const {id, name, info, image, price} = props;
  return (
    <li className="list-item">
      <div className="image-container">
        <img className="image" src={image} alt="" />
        <p className="price">{price}</p>
      </div>
      <div className="info-container">
        <h3 className="tour-name">{name}</h3>
        <p className="tour-info">{info} <button>Read more</button></p>
        <button>Not interested</button>

      </div>
    </li>
  )

}

export default Tour
