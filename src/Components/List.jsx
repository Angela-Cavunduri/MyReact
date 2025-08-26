import Item from "./Item"


function List(){
    return(
        <>
        <h1>Minha lista</h1>
        <ul>
           <Item marca="ferrari"/>
            <Item marca="fiat"/>
        </ul>
        </>
    )
}

export default List