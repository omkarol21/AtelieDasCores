import styled from './Categoria.module.css'
import CardsCategoria from "./CardsCategoria";
function Categoria(){
    return(
        <div className={'row'} id="categorias">
            <div className={'col-md-12'}>
                <h4 className={styled.titulo}>Escolha por categoria</h4>
            </div>

            <CardsCategoria img='/img/CategoriaPincel.png' nome='Pincéis'></CardsCategoria>
            <CardsCategoria img='/img/CategoriaTintas.png' nome='Tintas'></CardsCategoria>
            <CardsCategoria img='/img/CategoriaFerramentas.png' nome='Ferramentas'></CardsCategoria>
            <CardsCategoria img='/img/CategoriaTelas.png' nome='Telas'></CardsCategoria>

        </div>
    )
}

export default Categoria