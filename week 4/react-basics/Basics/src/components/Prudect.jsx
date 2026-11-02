
const Prudect = ({image , title, price}) => {
  return (
    <div className="pro-card">
      <img src={image}  />
<h3>{title}</h3>
<p>{price}$</p>
      <button className="btn">Add to cart</button>
    </div>
  )
}

export default Prudect
