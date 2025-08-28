import { useState } from "react"


function From(){

    function CasdastratarUsuario(e){
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha ${Password}`)
    }

    const [name,setName]=useState()
     const [Password,setPassword]=useState()
    return(
<div>
    <h1>Meu cadastro:</h1>
    <form onSubmit={CasdastratarUsuario}>
        <div>
            <label htmlFor="Name">Name:</label>
            <input type="name"
             id="name"
            name="name"
             placeholder="Digite o seu nome"
              onChange={(e)=>setName(e.target.value)}
            />
        </div>
         <div>
            <label htmlFor="Password">Senha:</label>
          <input type="Password" placeholder="Digite o seu nome"
          onChange={(e)=>setPassword(e.target.value)} 
          />    
        </div>
        <div>
         <input type="Submit" value="Cadasterar" />
        </div>
    </form>
</div>
    )
}

export default From