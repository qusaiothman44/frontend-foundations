
const Card = ({item,addToCart}) => {
  return (
    <div className="card">
        <img src={item.image} alt={item.title} />
      <h4>{item.title.slice(0,20)}</h4>
      <p>{item.description.slice(0,100)}</p>
      <p className="price">{item.price}</p>
      <button onClick={()=>addToCart(item)}>ADD</button>
    </div>
  )
}

export default Card
