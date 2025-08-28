import Button from "./Button"

function MeuEvento(){
    return(
        console.log("Ativando o primeiro evento!")
    )
}


function Evento(){
    return(
        <div>
            <p>Clique aqui dispara um evento:</p>
            <Button event={MeuEvento} text="Primeiro evento" />
            <button onClick={MeuEvento}>Activar</button>
        </div>
    )
}

export default Evento