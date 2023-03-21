function Produto({title,img,link}){
    return(
        <a href={link} target='_blank' className="aproduto">
            <div className="boxpro">
                <img src={img}/>
                <span>{title}</span>
            </div>
        </a>
    )
}
export default Produto;