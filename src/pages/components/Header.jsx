import logo from '../../assets/img/logo.png'
function Header({nome}){
    return (
        <header>
            <div className="text">
                <span className='mobile_header'>
                    <img src={logo} alt="none" />
                    <h1>Bem-Vindo</h1>
                </span>
                <p>Bem vindo - Criatividade em um só lugar. Obtenha artes gráficas incríveis moldadas a cada detalhe e crie seu Website dos sonhos. Seu pedido é a nossa prioridade!</p>
                <div className='btn'>
                    <a href="#sobre">
                        <input type="button" value="Ver Mais" />
                    </a>
                    <a href="#contato">
                        <input type="button" value="Contato" />
                    </a>
                </div>
            </div>
            <div className="img">
                <img src={logo} alt="none" />
            </div>
        </header>
    )
}
export default Header