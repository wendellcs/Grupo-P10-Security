import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaFacebook  } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";

import '../../assets/sass/components/_footer.sass'

export default function Footer(){
    return (

        <footer id="footer">
            <div className="footer-top">
                <div className="footer-top-content">

                <h3 className="footer-title">Nossas redes</h3>
                   <nav className="footer-top-content-links">
                        <ul>
                            <li><a href="#" className="link"><FaInstagram /></a></li>
                            <li><a href="#" className="link"><FaLinkedin /></a></li>
                            <li><a href="#" className="link"><FaFacebook /></a></li>
                            <li><a href="#" className="link"><BsFillThreadsFill/></a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="footer-middle">
                <nav className="footer-middle-links">
                    <ul>
                        <li><a href="#" className="link">Sobre nós</a></li>
                        <li><a href="#" className="link">Nossos valores</a></li>
                        <li><a href="#" className="link">Contato</a></li>
                    </ul>
                </nav>
            </div>

            <div className="footer-bottom">
                <p className="text">&copy; GRUPO P10 2024</p>
            </div>
        </footer>
    )
}