import './App.css';
import Nav from "./componentes/Nav.jsx";
import Banner from "./componentes/Banner.jsx";
import Promocao from "./componentes/Promocao.jsx";
import Categoria from "./componentes/Categoria.jsx";
import Galeria from "./componentes/Galeria.jsx";
import Footer from "./componentes/Footer";
import Dicas from "./componentes/Dicas";

function App() {
  return (

    //   Tag fantasma, para que os dois conteiners tanto da NAV quanto da DIV não se choquem,
    // uma vez que o script não permite que tenham duas Divs pai

    <>
        <Nav></Nav>
        <div className="container-fluid">
            <Banner></Banner>
            <Promocao></Promocao>
            <Categoria></Categoria>
            <Galeria></Galeria>
            <Dicas></Dicas>
            <Footer></Footer>
        </div>
    </>
  );
}

export default App;
