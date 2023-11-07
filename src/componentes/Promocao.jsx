import CardsPromo from './CadsPromo.jsx'
import styled from "./Promocao.module.css"
function Promocao() {
    return (
        <div className={'row ' + styled.promo} id="promo">
            <div className={'col-md-12'}>
                <h4 className={styled.titulo}>Promoção</h4>
                <div className={styled.linha}></div>
            </div>

            <CardsPromo img="/img/Produto1.png" nome="Tinta Acrílica Brilhante Acrilex 37ml"
                                precoAntigo="De R$ 7,00" precoAtual="Por R$ 5,60"
            ></CardsPromo>

            <CardsPromo img="/img/Produto2.png" nome="Kit Pincéis com 6 Unidades"
                                precoAntigo="De R$ 60,49" precoAtual="Por R$ 48,49"
            ></CardsPromo>

            <CardsPromo img="/img/Produto3.png" nome="Tela para Pintura 10x25x2cm"
                                precoAntigo="De R$ 6,39" precoAtual="Por R$ 5,19"
            ></CardsPromo>
        </div>
    )
}

export default Promocao