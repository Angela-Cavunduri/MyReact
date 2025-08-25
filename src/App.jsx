import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './Components/HelloWorld.jsx'
import SayMyName from './Components/SayMyName.jsx'
import Pessoa from './Components/Pessoa.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    
       
      </div>
     
      <p className="read-the-docs">
          <HelloWorld/>
      <SayMyName nome="Ângela"/>
      <Pessoa
       nome="Leandro"
       idade="18"
       professor="programador"
       foto="https://via.placeholder.com/150"
      />
      </p>
    </>
  )
}

export default App
