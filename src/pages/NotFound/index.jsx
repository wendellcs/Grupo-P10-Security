import Header from "../../components/Header"
import Footer from "../../components/Footer"
import '../../assets/sass/layouts/_notFound.sass'
import logo from '../../assets/images/p10-logo.png'
import { Link } from "react-router-dom"

export default function NotFound(){
    return (
        <div className="container-notFound">
            <Header shortHeader={true}/>
            <main className="notFound-page">
                <div className="notFound-page-content">
                    <h2 className="section-title"> Algo não parece certo...</h2>

                    <p className="text dark">A página que você está procurando não existe ou foi movida.</p>
                </div>
                <img className="logo" src={logo} alt="Grupo P10 Logo" />

                <Link className="link dark" to={'/'}>Clique aqui para voltar à página principal</Link>
            </main>
            <Footer shortFooter={true}/>
        </div>
    )
}