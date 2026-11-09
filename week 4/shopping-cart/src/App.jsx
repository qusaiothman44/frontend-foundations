import { useState ,useEffect } from 'react'
import Items from './components/Items'
import Cart from './components/Cart'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])

  const fetchItems = async ()=>{
    const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json();
  console.log(data)
return data}
 useEffect(()=>{
    const getItems = async ()=>{
      const fetchFromAPI= await fetchItems();
      setItems(fetchFromAPI)
    }
    getItems();
  },[])

  const addToCart=(product)=>{
    setCart((prev)=>{
      const isItemInCart = prev.find((item)=> item.id === product.id);

      if(isItemInCart){
        return prev.map((item)=>{
          item.id === product.id ? {...item, quantity: item.quantity +1}:item
        })  
      }
      return [...prev,{...product,quantity:1}]
    })
  }
  const cartTotal= cart.reduce((total,item)=> total + item.price * item.quantity,0)
  return (
    <>
    {items.length >0 ? (
      <Items items={items} addToCart={addToCart}/>
    ):( "no items")

    }
    <Cart cart={cart} cartTotal={cartTotal}/>
    </>
  )
}

export default App
