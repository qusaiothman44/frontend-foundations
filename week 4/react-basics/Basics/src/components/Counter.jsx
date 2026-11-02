import { useState } from "react"
const Counter = () => {
    const [counter,setCounter] = useState(0);
    const [step,setStep] = useState(1);
    const handleChange = (e)=>{
      setStep(Number(e.target.value))
    }
    const changeCounter = (isIncrise,step)=>{
if (isIncrise) {
 setCounter(counter +step) 
}else{
  if((counter - step) >=0){
  setCounter(counter -step) }
}
    }
  return (
    <div className="counter">
      <h1>{counter}</h1>
      <button onClick={()=>changeCounter(true,step)}>+</button>
      <button onClick={()=>setCounter(0)}>reset</button>
      <button onClick={()=>changeCounter(false,step)}>-</button>
      <input className="input"  type="number" value={step} onChange={handleChange} />
    </div>
  )
}

export default Counter
