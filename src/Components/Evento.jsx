

function MeuEvento(){
    return(
        console.log("Epha. fui ativado")
    )
}


function Evento(){
    return(
        <div>
            <p>Clique aqui dispara um evento:</p>
            <button onClick={MeuEvento}>Activar</button>
        </div>
    )
}

export default Evento