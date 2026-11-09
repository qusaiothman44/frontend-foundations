import Card from "./card"
const Items = ({items,addToCart}) => {
  return (
    <div className="items">
      {items.map((item)=>(
<Card key={item.id} item={item} addToCart={addToCart}/>
      ))}
    </div>
  )
}

export default Items
