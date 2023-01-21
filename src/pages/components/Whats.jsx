function Whats(){
    return(
        <section className="whats">
            <div className="box">
                <h1><i class='bx bxs-message-square-dots'></i>Gostou ? Manda Um Zap !<i class='bx bxs-message-square-dots'></i></h1>
                <div className="text">
                    <i class='bx bxl-whatsapp' ></i>
                    <a href="https://api.whatsapp.com/send/?phone=81300723&text&type=phone_number&app_absent=0" target='_blank'>
                        <input type="button" value="Entrar Em Contato" />
                    </a>
                </div>
            </div>


        </section>
    )
}
export default Whats