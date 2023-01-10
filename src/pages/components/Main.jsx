function Main({nome}){
    return (
        <main id="sobre">
            <div className="box">
                <div className="title">
                    <h1>Quem Somos ?</h1>
                </div>
                <div className="oter">
                    <div className="text">
                        <h1>{nome}</h1>
                        <p>Somos uma Startup onde ofertamos serviços virtuais criativos, como: Designer Gráfico, Designer Responsivo e Desenvolvimento de Websites. Além disso, auxiliamos no desenrolar da sua empresa ou serviço, sempre atento aos mínimos detalhes e mantendo-o atualizado sobre o mercado de trabalho. </p>
                        <input type="button" value="Continuar" />
                    </div>
                    <div className="right">
                        <i class='bx bxs-user-account'></i>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main