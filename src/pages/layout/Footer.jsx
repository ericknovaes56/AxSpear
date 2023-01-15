function Footer({nome}){
    return (
        <footer>
            <div className="init_footer">
              <h2>{nome}</h2>
              <h2>© {nome} 2023 </h2>
            </div>
            <div className="links_footer">
              <ul className="text_footer">
                <div>
                  <h1 className="title_footer">Sobre</h1>
                  <p>Startup Social que viabiliza integrar novos designer e programadores ao mercado de trabalho mais facilmente e facilitar a vida do cliente que está em buscas desses serviço. Tenha acesso a desenvoltura do seus Websites e artes gráficas com mais praticidade e, além disso, gerenciamos o seu Instagram para você.</p>
                </div>
              </ul>
              <ul className="coluna_footer">
                <h1 className="title_footer">Redes</h1>
                <li><a href="https://www.instagram.com/axspear_/" target='_blank' className="links_of_footer"><i className="bx bxl-instagram-alt" />Instagram</a></li>
                <li><a href="https://www.tiktok.com/@axspear1" target='_blank' className="links_of_footer"><i className="bx bxl-tiktok" />TikTok</a></li>
              </ul>
              <ul className="coluna_footer">
                <h1 className="title_footer">Paginas</h1>
                <li><a href="#" className="links_of_footer"><i className="bx bxs-home-alt-2" />Inicio</a></li>

              </ul>
              <ul className="coluna_footer">
                <h1 className="title_footer">Contatos</h1>
                <li><a target='_blank' href="https://api.whatsapp.com/send/?phone=81300723&text&type=phone_number&app_absent=0" className="links_of_footer"><i className="bx bxl-whatsapp" />Whatsapp</a></li>
                <li><a href="https://www.instagram.com/axspear_/" target='_blank' className="links_of_footer"><i className="bx bxl-instagram-alt" />Instagram</a></li>
              </ul>
            </div>
        </footer>

    )
}
export default Footer;