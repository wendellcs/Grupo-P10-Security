import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaFacebook  } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import '../../assets/sass/components/_header.sass'

export default function Header(){
    return (
        <header id="header">
            <div className="header-top">
                <h2 className="section-title">Grupo P10 Security</h2>

   
            </div>
            <div className="header-bottom">
                <nav className="menu-icons">
                    <ul>
                        {/* Redes sociais */}
                        <li><a href="#"><FaInstagram /></a></li>
                        <li><a href="#"><FaLinkedin /></a></li>
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><BsFillThreadsFill/></a></li>
                    </ul>
                </nav>
                <nav className="menu-links">
                    <ul>
                        <li><a href="#" className="link">Home</a></li>
                        {/* Página sobre a empresa */}
                        <li><a href="#" className="link">Sobre nós</a></li>
                        {/* Página de contato */}
                        <li><a href="#" className="link">Contato</a></li>
                        {/* Levar para a página de serviços */}  
                        <li><a href="#" className="link">Serviços</a></li> 
                    </ul>
                </nav>

                <button className="btn login">Entrar</button>
            </div>
        </header>
    )
}