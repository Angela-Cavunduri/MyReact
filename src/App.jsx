import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OutraLista from './Components/OutraLista'

function App(){
  const MeusItens=["React","Vue","Angular"]

  return(
    <>
    <h1>Renderização de listas</h1>
    <OutraLista itens={MeusItens}/>
     <OutraLista itens={[]}/>
    </>
  )
}

export default App
