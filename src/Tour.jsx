import "./Tour.css"

function Tour(props) {
  const {id, name, info, image, price} = props;
  return (
    <li>
      <div>
        <img src={image} alt="" />
        <p>{price}</p>
      </div>
      <h3>{name}</h3>
      <p>{info}</p>
    </li>
  )

}

export default Tour
