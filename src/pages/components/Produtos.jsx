import Produto from "./parts/Produto";
function Produtos({nome}){
    return(
        <section className="produtos" id="shop">
            <h1>
                {nome} Shop
            </h1>
            <div className="contentp">
                <Produto title='Pai Rico, Pai Pobre' img='https://cdn.eduzzcdn.com/myeduzz/upload/15/f0/15f07ebb9c12479ba786b909623b7065' link='https://sun.eduzz.com/1675063?a=52169091'/>
                <Produto title='O Imã Da Abundância' img='https://cdn.eduzzcdn.com/myeduzz/upload/ac/5b/ac5b0abf2b1b400a91820dc6754f3e72' link='https://sun.eduzz.com/127393?a=52169091'/>
            </div>
        </section>
    )
}
export default Produtos;