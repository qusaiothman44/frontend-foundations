import { useState, useEffect } from "react"
const ColorPicker = () => {
    const [favColor,setFavColor]=useState(()=>{
        return localStorage.getItem('userFavColor' || '#fff')
    })

    useEffect(()=>{
        localStorage.setItem('userFavColor',favColor)
    },[favColor])
  return (
    <div style={{backgroundColor:favColor, height:'100vh'}}>
<input type="color" value={favColor} onChange={(e)=> setFavColor(e.target.value)} />
    </div>
  )
}

export default ColorPicker
