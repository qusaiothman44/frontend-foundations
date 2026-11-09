
const Cart = ({cart,cartTotal}) => {
  return (
    <div>
     {cart.length == 0 ? (<p>your cart is empty</p>):
     (
        <>
        <ul>
            {
                cart.map((item)=>(
                    <li key={item.id}>{item.title} - {item.price} - {item.qantity}</li>
                ))
            }
        </ul>
     <h2>{cartTotal}</h2></>)
     } 
    </div>
  )
}

export default Cart
