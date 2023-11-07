import styled from "./Nav.module.css"
function Nav(){
    return(
        <header className={styled.Nav}>

            <nav className="navbar navbar-expand-lg " style={{padding: "0px"}}>

                <div className="container">

                    {/*Logo*/}
                    <a className="navbar-brand" href="#banner">
                        <img src="/img/Logo1.png" alt="Logo"
                             className={"d-inline-block align-text-top " + styled.img} />
                    </a>

                    {/*Botão de navegação do resposivo*/}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/*Navegação*/}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className={"nav-link " + styled.p} href="#promo">PROMOÇÕES</a>
                            </li>

                            <li className="nav-item">
                                <a className={"nav-link " + styled.p} href="#categorias">PRODUTOS</a>
                            </li>

                            <li className="nav-item">
                                <a className={"nav-link " + styled.p} href="#galeria">GALERIA</a>
                            </li>

                            <li className="nav-item">
                                <a className={"nav-link " + styled.p} href="#dicas">DICAS</a>
                            </li>

                        </ul>

                    </div>

                </div>

            </nav>

        </header>
    )
}

export default Nav