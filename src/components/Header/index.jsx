import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaFacebook  } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import '../../assets/sass/components/_header.sass'
import MobileMenu from '../Mobile-menu';

export default function Header(){
    const [simpleHeader, setSimpleHeader] = useState(true)

    function togleSimpleHeader(){
        setSimpleHeader(!simpleHeader)
    }

    return (
        <header id="header">

            {/* <div className="simple-header" style={{display: simpleHeader ? 'flex' : 'none'}}>
                <nav className="menu-icons">
                    <ul>
                        <li><a href="#"><FaInstagram /></a></li>
                        <li><a href="#"><FaLinkedin /></a></li>
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><BsFillThreadsFill/></a></li>
                    </ul>
                </nav>

                <h2 className="section-title">Grupo P10 Security</h2>
            </div> */}
            <div className="header-top" >
                <h2 className="section-title">Grupo P10 Security</h2>
            </div> 
            <div className="header-bottom">
                <MobileMenu/>
                <nav className="menu-icons">
                    <ul>
                        <li><a href="#"><FaInstagram /></a></li>
                        <li><a href="#"><FaLinkedin /></a></li>
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><BsFillThreadsFill/></a></li>
                    </ul>
                </nav>
                <nav className="menu-links">
                    <ul>
                        <li><a href="#" className="link">Home</a></li>

                        <li><a href="#" className="link">Sobre nós</a></li>
              
                        <li><a href="#" className="link">Contato</a></li>
                    
                        <li><a href="#" className="link">Serviços</a></li> 
                    </ul>
                </nav>

                <Link to='/Login' className="btn login link">Entrar</Link>
            </div>
        </header>
    )
}