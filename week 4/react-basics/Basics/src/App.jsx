import { useState } from 'react'
import Counter from './components/counter'
import Prudects from './components/Prudects'
import Signup from './components/Signup'
import Toggle from './components/Toggle'
import ColorPicker from './components/ColorPicker'
import './App.css'

function App() {

  return (
    <>
    <div className="app">
    <Counter/>
    <br /> 
    <Prudects/>

    <br /> 
    <Signup/>
    <br /> 
    <Toggle/>

    <br /> 
    <ColorPicker/>
    </div>
    </>
  )
}

export default App
