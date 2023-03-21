function NavBar({nome}){
    return (
        <nav className="menu">
            <input type="checkbox"  id="check" />
            <nav className="sidebar">
                <div className="init">
                    <span>{nome}</span>
                    <span className="mobile">
                        <label htmlFor="check">
                            <i class='bx bx-menu'></i>
                        </label>
                    </span>
                </div>
                <ul>
                    <li><a href="#"><input type="button" value="Inicio" /></a></li>
                    <li><a href="#sobre"><input type="button" value="Sobre" /></a></li>
                    <li><a href="#contato"><input type="button" value="Contato" /></a></li>
                    <li><a href="#shop"><input type="button" value="Shop" /></a></li>
                </ul>
            </nav>
            <div className="title">
                <h1>{nome}</h1>
            </div>
            <div className="navigator">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="#shop">Shop</a></li>
                </ul>
                <span className="mobile">
                    <label htmlFor="check">
                        <i class='bx bx-menu'></i>
                    </label>
                </span>
            </div> 
        </nav>
    )
}
export default NavBar