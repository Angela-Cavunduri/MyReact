


function From(){

    function CasdastratarUsuario(e){
        e.preventDefault()
        console.log("Cadastrou usuário")
    }
    return(
<div>
    <h1>Meu cadastro:</h1>
    <form onSubmit={CasdastratarUsuario}>
        <div>
            <input type="text" placeholder="Digite o seu nome" />
        </div>
        <div>
          <button>Cadastrar</button>
        </div>
    </form>
</div>
    )
}

export default From