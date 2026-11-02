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
    <Counter/>
    <br />
    <Prudects/>

    <br /> 
    <Signup/>
    <br />
    <Toggle/>

    <br />
    <ColorPicker/>
    </>
  )
}

export default App
