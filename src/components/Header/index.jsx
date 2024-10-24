import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaFacebook  } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import '../../assets/sass/components/_header.sass'

import MobileMenu from '../Mobile-menu';

export default function Header({shortHeader}){

    return (
        <header id="header">
            {!shortHeader && (
                <div className="header-top" >
                    <h1 className="main-title">Grupo P10 Security</h1>
                </div> 
            )}
           
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
                { !shortHeader && (
                    <>
                    <nav className="menu-links">
                        <ul>
                            <li><a href="#" className="link">Home</a></li>
                            <li><a href="#" className="link">Sobre nós</a></li>
                            <li><a href="#" className="link">Contato</a></li>
                            <li><a href="#" className="link">Serviços</a></li> 
                        </ul>
                    </nav>

                    <Link to='/Login' className="btn login link">Entrar</Link>
                </>
                )}
                { shortHeader && (
                    <h1 className='main-title login-page-main-title'>Grupo P10 Security</h1>
                )}
            </div>
        </header>
    
    )
}