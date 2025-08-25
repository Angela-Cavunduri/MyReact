function Pessoa({nome,idade,professor,foto}){
    return(
        <div>
            <img src={foto} alt={nome} />
            <h2>Name: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Professor: {professor}</p>
        </div>
    )
}

export default Pessoa