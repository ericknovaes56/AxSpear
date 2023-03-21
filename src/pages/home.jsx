import Contato from "./components/Contato"
import Galeria from "./components/Galeria"
import Header from "./components/Header"
import Main from "./components/Main"
import Objetivo from "./components/Objetivo"
import Produtos from "./components/Produtos"
import Whats from "./components/Whats"

function Home({nome}){
    return (
        <>
            	<Header nome={nome}/>
                <Main nome={nome}/>
                <Whats nome={nome}/>
                <Objetivo nome={nome}/>
                <Galeria name={nome}/>
                <Contato nome={nome}/>
                <Produtos nome={nome}/>
        </>
    )
}
export default Home