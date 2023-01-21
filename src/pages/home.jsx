import Contato from "./components/Contato"
import Equipe from "./components/Equipe"
import Galeria from "./components/Galeria"
import Header from "./components/Header"
import Main from "./components/Main"
import Objetivo from "./components/Objetivo"
import Whats from "./components/Whats"

function Home({nome}){
    return (
        <>
            	<Header nome={nome}/>
                <Main nome={nome}/>
                <Whats nome={nome}/>
                <Objetivo nome={nome}/>
                <Equipe name={nome}/>
                <Galeria name={nome}/>
                <Contato nome={nome}/>
        </>
    )
}
export default Home