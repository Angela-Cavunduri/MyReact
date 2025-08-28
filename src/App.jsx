import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OutraLista from './Components/OutraLista'
import HelloWorld from './Components/HelloWorld.jsx'
import Evento from './Components/Evento.jsx'
import From from './Components/From.jsx'
import SayMyName from './Components/SayMyName.jsx'

function App(){
  const MeusItens=["React","Vue","Angular"]
  return(
    <>
    <h1>Renderização de listas</h1>
    <OutraLista itens={MeusItens}/>
     <OutraLista itens={[]}/>
      <div>
       
       
      </div>
      <Evento/>
      <From/>  
      <p className="read-the-docs">
         <HelloWorld/>
         <SayMyName nome="Ângela"/>
      </p>
    </>
  )
}

export default App
