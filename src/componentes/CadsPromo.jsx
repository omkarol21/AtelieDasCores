import styled from "./CardsPromo.module.css"
function CadsPromo(props){
    return(
        <div className={'col-md-4 col-sm-12 '}>
            <div className={styled.Card}>
                <img className={styled.desconto} src={'/img/Desco.png'}/>
                <img className={styled.imgProdutos} src={props.img}/>
                <p className={styled.text}>{props.nome}</p>

                <div className={styled.linha}></div>

                <p className={styled.text} style={{textAlign: 'left'}}>{props.precoAntigo}</p>
                <p className={styled.text}>{props.precoAtual}</p>
                <button className={styled.botao}>Comprar</button>
            </div>
        </div>
    )
}

export default CadsPromo