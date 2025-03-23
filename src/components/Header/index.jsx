import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaFacebook  } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";

import MobileMenu from '../Mobile-menu';

export default function Header({shortHeader}){

    return (
        <header id="header">
            {!shortHeader && (
                <div className="header-top" >
                    <h1 className="main-title">Grupo P10 Security</h1>
                </div> 
            )}
           
            <div className={!shortHeader ? "header-bottom" : "header-bottom shortHeader"}>
                <MobileMenu/>
                <nav className="menu-icons">
                    <ul>
                        <li><a href="#"><FaInstagram /></a></li>
                        <li><a href="#"><FaLinkedin /></a></li>
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><BsFillThreadsFill/></a></li>
                    </ul>
                </nav>
                
                <nav className={!shortHeader ? "menu-links" : "menu-links shortHeader"}>
                    <ul>
                        <li><Link to={'/'} className="link">Home</Link></li>
                        <li><Link to={'/about'} className="link">Sobre nós</Link></li>
                        <li><Link to={'/contact'} className="link">Contato</Link></li>
                        <li><Link to={'/services'} className="link">Serviços</Link></li>
                        <li><Link to={'/store'} className="link">Produtos</Link></li>
                    </ul>
                </nav>

                {!shortHeader && (
                    <Link to='/Login' className="btn login link">Entrar</Link>
                )}
         
            </div>
        </header>
    
    )
}