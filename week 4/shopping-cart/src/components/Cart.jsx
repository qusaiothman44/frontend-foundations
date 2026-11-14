import { useState } from "react"
import Modal from "./Modal";
import { FaShoppingCart } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
const Cart = ({cart,cartTotal,cartCount,updatedQuantity}) => {
  const [open,setOpen]=useState(false);

  const handleClose =()=>{
setOpen(false)
  }
  const handleOpen =()=>{
setOpen(true)
  }

  return (
    <div>
   
        <>
          
            <button type="button" onClick={handleOpen} className="cart-icon">
  <FaShoppingCart />
  <span>{cartCount}</span>
</button>
         <Modal isOpen={open} onClose={handleClose}>
        <ul>
            {
                cart.map((item)=>(
                    <li key={item.id}>{item.title} - {item.price} - <button onClick={()=>updatedQuantity(item.id,1)}><FaPlus/></button> {item.quantity} <button onClick={()=>updatedQuantity(item.id,-1)}><FaMinus/></button></li>
                ))
            }
        </ul>
     <h2>{cartTotal}</h2>
     </Modal></>
    
    </div>
  )
}

export default Cart
