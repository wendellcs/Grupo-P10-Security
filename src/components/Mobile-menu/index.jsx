import { useEffect, useState } from 'react'
import '../../assets/sass/components/_menu-icon.sass'
import '../../assets/sass/components/_mobile-menu.sass'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaFacebook  } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";

function MenuIcon({handleClick, clicked}) {
    return (
        <div className="container-menu-icon" onClick={handleClick}>
            <div className={clicked ? "menu-icon clicked" : "menu-icon"} ></div>  
        </div>
    )
}

export default function MobileMenu(){
    const [clicked, setClicked] = useState(false)
    const [windowWidth, setWindowWidth] = useState()

    function handleMenuMobileVisibility(){
        console.log(windowWidth)
        setWindowWidth(window.innerWidth)
    }

    // Fazer animação para abrir e fechar o menu

    function handleClick(){
        setClicked(!clicked)
    }

    return (
        <div className="container-mobile-menu">
            <MenuIcon handleClick={handleClick} clicked={clicked}/>

            {clicked && (
                <>
                  <nav className="container-mobile-menu-icons">
                        <ul>
                            <li><a href="#"><FaInstagram /></a></li>
                            <li><a href="#"><FaLinkedin /></a></li>
                            <li><a href="#"><FaFacebook /></a></li>
                            <li><a href="#"><BsFillThreadsFill /></a></li>
                        </ul>
                    </nav>
                    <nav className="container-mobile-menu-links">
                        <ul>
                            <li><a href="#" className="link">Home</a></li>

                            <li><a href="#" className="link">Sobre nós</a></li>
                
                            <li><a href="#" className="link">Contato</a></li>
                        
                            <li><a href="#" className="link">Serviços</a></li> 
                        </ul>
                    </nav>
                    <Link to='/Login' className="btn mobile-menu-login link">Entrar</Link>
                </>
            )}

        </div>
    )
}