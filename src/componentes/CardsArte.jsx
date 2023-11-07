import styled from './CardsArte.module.css';
function CardsArte(props){
    return(
        <div className={'col-md-4 col-sm-12 '}>
            <div className={styled.CardArte}>
                <img style={{width: "100%", maxWidth: "320px"}} src={props.imgArtes}/>
                <div className={styled.divIcone}>
                    <a href="http://instagram.com" target="_blank">
                        <img className={styled.iconInsta} src={'/img/IconInsta.png'}/>
                    </a>
                    <p className={styled.aInsta}>{props.pessoa}</p>
                </div>
            </div>
        </div>
    )
}

export default CardsArte