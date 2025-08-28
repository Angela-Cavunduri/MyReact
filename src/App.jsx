import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OutraLista from './Components/OutraLista'
import HelloWorld from './Components/HelloWorld.jsx'
import SayMyName from './Components/SayMyName.jsx'
import SeuNome from './Components/SeuNome.jsx'
import Saudacao from './Components/Saudacao.jsx'

function App(){
  const [nome,SetNome]=useState()

  return(
    <>
    <h1>State Lift</h1>
    <SeuNome setNome={SetNome}/>
    <Saudacao nome={nome}/>
    </>
  )
}

export default App
