import { useState } from "react"


function Condicional(){
    const [email,setEmail]=useState()
    const [UserEmail,steUserEmail]=useState()
    function EnviarEmail(e){
        e.preventDefault()
        steUserEmail(email)
        console.log(UserEmail)
    }

      function LimparEmail(){
        e.preventDefault()
        steUserEmail("")
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>

            <form action="email">
                <input type="email" placeholder="Digite o seu email"
                onChange={(e)=>setEmail(e.target.value)
                }
                />
                <button type="submit" onClick={EnviarEmail}>Eviar-email</button>
                {/*Estrutura de condição*/}
                {
                    UserEmail &&(
                        <div>
                            <p>O e-mail do usuário é: {UserEmail}</p>
                            <button onChange={LimparEmail}>Limpar email</button>
                        </div>
                    )
                }
            </form>
        </div>
    )
}

export default Condicional