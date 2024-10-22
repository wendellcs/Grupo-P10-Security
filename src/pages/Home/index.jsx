import '../../assets/sass/layouts/home.sass'

import securityImage from './../../assets/images/security.png'
import bodyguard from './../../assets/images/bodyguard.png'
import armedScolt from './../../assets/images/armed-scolt.png'

import Header from "../../components/Header";
import ReasonsToChoose from "../../components/ReasonsToChoose";
import Footer from "../../components/Footer";

export default function Home(){
    return (
        <main id="main">
            <Header />

            <section className="banner">
                <div className="banner-container">
                    <div className="banner-container-content">
                        <h1 className="banner-container-content-title">Grupo P10</h1>

                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis exercitationem ipsum, et dignissimos vero omnis libero. Architecto voluptatibus aut hic autem ullam. Vero voluptatem illo quod quam enim quos.
                        </p>

                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis exercitationem ipsum, et dignissimos vero omnis libero. Architecto voluptatibus aut hic autem ullam. Vero voluptatem illo quod quam enim quos.
                        </p>
                    </div>
                </div>
            </section>

            <section id="about">
                <h2 className="section-title">Quem somos?</h2>
                <div className="about-container">
                    <img className="security-image" src={securityImage} alt="Security image" />

                    <div className="about-container-content">
                        <h3 className="block-title">GRUPO P10</h3>

                        <p className="text">O GRUPO P10 é a herdeira de uma tradição milenar de proteção e segurança, que se estende desde os tempos de Alexandre, o Grande. </p>
                        <p className="text">Guiados por valores como honra, lealdade, disciplina, excelência, inovação, adaptação, integridade e ética, buscamos ser a referência global em segurança patrimonial, preservando o legado de proteção e inovação, presente desde a antiguidade. Acreditamos que a segurança é um investimento fundamental para o sucesso de qualquer negócio e que nossa experiência nos permite oferecer soluções personalizadas e eficazes para cada cliente.</p>
                    </div>
                </div>
            </section>

            <section id="mission">
                <div className="mission-container">
                    <h2 className="block-title">Nossa missão</h2>

                    <p className="text">Proteger pessoas e patrimônios, utilizando nossa expertise e tecnologia de  ponta, para garantir a segurança e a tranquilidade de nossos clientes.  </p>
                </div>
            </section>

            <section id="services">
                <h2 className="section-title">Nossos serviços</h2>

                <div className="services-container">
                    <div className="services-box">
                        <figure className="fig">
                            <img src={bodyguard} alt="Descrição da imagem"/>
                            <figcaption>
                                <h3 className="block-title">Segurança</h3>
                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sequi doloribus maxime incidunt tempora pariatur dolore veritatis qui! Necessitatibus nam ipsum odio laudantium quod itaque aliquid nihil nobis perferendis dolorem!</p>
                            </figcaption>
                        </figure>

                        <figure className="fig">
                            <img src={armedScolt} alt="Descrição da imagem"/>
                            <figcaption>
                                <h3 className="block-title">Escolta armada</h3>
                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </figcaption>
                        </figure>
                    </div>

                    <button className="btn cta services">Mais serviços</button>
                </div>
            </section>

            <section id="whyChooseUs">
                <h2 className="section-title">Por que escolher o nosso serviço?</h2>

                <div className="whyChooseUs-container">
                    <ReasonsToChoose/>
                </div>
            </section>

            <Footer/>
        </main>
    )
}