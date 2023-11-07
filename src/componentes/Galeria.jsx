import styled from './Galeria.module.css'
import CardsArte from "./CardsArte";
function Galeria(){
    return(
        <div className={'row ' + styled.galeria} id="galeria">
            <div>

            </div>
            <div className={'col-md-12'}>
                <h4 className={styled.tituloGa} >Galeria</h4>
                <p className={styled.txt} >Confira os trabalhos de artistas feitos com nossos materiais:</p>
            </div>

            <CardsArte imgArtes='/img/Foto1.png' pessoa='@mgmariaclara'></CardsArte>
            <CardsArte imgArtes='/img/Foto2.png' pessoa='@yasmimm_'></CardsArte>
            <CardsArte imgArtes='/img/Foto3.png' pessoa='@marifermino'></CardsArte>
            <CardsArte imgArtes='/img/Foto4.png' pessoa='@igorcacerez'></CardsArte>
            <CardsArte imgArtes='/img/Foto5.png' pessoa='@mkaroline_'></CardsArte>
            <CardsArte imgArtes='/img/Foto6.png' pessoa='@bruno.trz'></CardsArte>

        </div>
    )
}

export default Galeria