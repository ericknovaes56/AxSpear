import Contato from "./components/Contato"
import Galeria from "./components/Galeria"
import Header from "./components/Header"
import Main from "./components/Main"
import Objetivo from "./components/Objetivo"

function Home({nome}){
    return (
        <>
            	<Header nome={nome}/>
                <Main nome={nome}/>
                <Objetivo nome={nome}/>
                <Galeria nome={nome}/>
                <Contato nome={nome}/>
        </>
    )
}
export default Home