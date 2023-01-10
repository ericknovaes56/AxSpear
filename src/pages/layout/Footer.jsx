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
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, est laboriosam. Officiis sequi mollitia nulla assumenda vel deleniti nostrum quas voluptate corrupti magnam! Laborum sunt accusantium animi soluta delectus ducimus!</p>
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