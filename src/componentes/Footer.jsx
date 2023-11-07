import styled from './Footer.module.css'
function Footer(){
    return(
        <div className={'row ' + styled.fundo}>
            <div className={'col-md-3 col-sm-12 ' + styled.centralizar}>
                <img className={styled.logo} src={'/img/Logo1.png'}/>
            </div>

            <div className={'col-md-3 col-sm-12'}>
                <p className={styled.tituloFooter} >Atendimento</p>
                <p className={styled.pFooter} >Segunda a sexta, das 8hs as 17hs</p>
            </div>

            <div className={'col-md-3 col-sm-12'}>
                <p className={styled.tituloFooter} >Contato</p>
                <p className={styled.pFooter} >(18) 99196-8778</p>
            </div>

            <div className={'col-md-3 col-sm-12 ' + styled.centralizar}>
                <p className={styled.tituloFooter} >Redes sociais</p>
                <a href="http://instagram.com" target="_blank">
                    <img className={styled.iconsImg} src={'/img/IconInstagram.png'}/>
                </a>
                <a href="http://facebook.com" target="_blank">
                    <img className={styled.iconsImg} src={'/img/IconFace.png'}/>
                </a>
                <a href="http://whatsapp.com" target="_blank">
                    <img className={styled.iconsImg} src={'/img/IconWhats.png'}/>
                </a>
            </div>
        </div>
    )
}

export default Footer