import styled from "./CardsCategoria.module.css";

function CardsCategoria(props){
    return(
        <div className={'col-md-3 col-sm-12 ' + styled.CardCat}>
            <img className={styled.imgCategoria} src={props.img}/>
            <p className={styled.titulo}>{props.nome}</p>
        </div>
    )
}

export default CardsCategoria