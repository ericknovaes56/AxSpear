import e1 from '../../assets/img/e1.jpg'
import e2 from '../../assets/img/e2.jpg'
import e3 from '../../assets/img/e3.jpg'
function Equipe({name}){
    return (
        <section className="equipe">
            <span className='title'>
                Equipe {name}:
            </span>
            <div className='equipein'>
                <div className="equipeBox">
                    <div className='top'>
                        <img src={e2} />
                        <span>Jefferson Matheus</span>
                    </div>
                    <a href="https://www.instagram.com/eaej_eff/" target='_blank' className='abox'>
                        <input type="button" value="Instagram"/>
                    </a>
                </div>
                <div className="equipeBox">
                    <div className='top'>
                        <img src={e1} />
                        <span>Erick Nogueira</span>
                    </div>
                    <a href="https://www.instagram.com/ericknovaes56/" target='_blank' className='abox'>
                        <input type="button" value="Instagram"/>
                    </a>
                </div>
                <div className="equipeBox">
                    <div className='top'>
                        <img src={e3} />
                        <span>Lucas Gabriel</span>
                    </div>
                    <a href="https://www.instagram.com/lucas_gbsilva/" target='_blank' className='abox'>
                        <input type="button" value="Instagram"/>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Equipe