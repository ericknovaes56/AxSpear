import contato from '../../assets/img/contato.png'
function Contato(){
    return(
        <section className="contato" id='contato'>
            <div className="form">
                <div className="title">
                    <h1>Contato !</h1>
                 </div>
                 <form action="https://api.staticforms.xyz/submit" method="post">
                    <input type="text" name="name" className="inp"  placeholder="Nome"/>
                    <input type="text" name="email"  className="inp"  placeholder="email"/>
                    <textarea  name="message" className="inp textarea" cols="30" rows="10" placeholder="O que quer dizer ?"></textarea>
                    <input type="submit" className="inp submit" value="Enviar"/>
                    <input type="hidden" name="redirectTo" value="https://www.instagram.com/axspear_/"></input>
                    <input type="hidden" name="accessKey" value="bb26accb-3471-4e5f-8fa4-a3676b25406f"/>
                 </form>
            </div>
            <div className="right">
                <img src={contato} alt="none" />
            </div>
        </section>
    )
}
export default Contato