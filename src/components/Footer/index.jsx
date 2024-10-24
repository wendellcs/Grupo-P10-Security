import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaFacebook  } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";

import '../../assets/sass/components/_footer.sass'

import shortFooterBg from './../../assets/images/short-footer-bg.png';
import footerBg from './../../assets/images/footer-bg.png';

export default function Footer({shortFooter}){
    return (
 
        <footer id="footer" style={{ background: `url(${shortFooter ? shortFooterBg : footerBg})` }}>
            { !shortFooter && (
                <>
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
                </>
            )}
            {shortFooter && (
                <div className="short-footer">
                    <div className="short-footer-copyright">
                        <p className="text">&copy; GRUPO P10 2024</p>
                    </div>

                    <nav className="short-footer-links">
                        <ul>
                            <li><a href="#" className="link">Sobre nós</a></li>
                            <li><a href="#" className="link">Nossos valores</a></li>
                            <li><a href="#" className="link">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            )}
        </footer>

    )
}