import styled from './Banner.module.css'
function Banner() {
    return (
        <div id="Banner" className="row banner" id="banner">
            <div className="col" style={{marginTop: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0}}>
                <img style={{width: "100%"}} className={"banner" + styled.tamanho} src='/img/Banner.png'/>
            </div>
        </div>
    )
}

export default Banner