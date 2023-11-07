import styled from './Dicas.module.css'
function Dicas(){
    return(
        <div className={'row'} id="dicas">
            <div className={'col-md-12'}>
                <h4 className={styled.tituloDicas}>Dicas</h4>
                <p className={styled.pDicas}>Acompanhe dicas e tutoriais de outros artitas para confecção de suas pinturas:</p>
            </div>

            <div className={'col-md-6'}>
                <iframe className={styled.Tamanho} width="560" height="315" src="https://www.youtube.com/embed/8p1BKNXc9bg?si=QpPX4payzq--IAV-"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                </iframe>
            </div>

            <div className={'col-md-6'}>
                <iframe className={styled.Tamanho} width="560" height="315" src="https://www.youtube.com/embed/kqqXBXN_yiw?si=jzu3iVZxruDAyhxa"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                </iframe>
            </div>

            <div className={'col-md-6'}>
                <iframe className={styled.Tamanho} width="560" height="315" src="https://www.youtube.com/embed/4idGGfFgI2s?si=KLmK7KI1m2t1uP6o"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                </iframe>
            </div>

            <div className={'col-md-6'}>
                <iframe className={styled.Tamanho} width="560" height="315" src="https://www.youtube.com/embed/De3nG-FILdU?si=4zBSJk15wPJxgIxk"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default Dicas