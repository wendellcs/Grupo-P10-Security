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
                <h2 className="section-title">Nossa história</h2>
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
                                <h3 className="block-title">Segurança pessoal</h3>
                                <p className="text">Nossa equipe é treinada e experiente, pronta para identificar e neutralizar riscos. Trabalhamos em colaboração para atender às necessidades específicas de cada cliente, utilizando tecnologia avançada para monitoramento e resposta rápida. Com nossa equipe, você pode ter a tranquilidade de estar seguro em todas as situações.</p>
                            </figcaption>
                        </figure>

                        <figure className="fig">
                            <img src={armedScolt} alt="Descrição da imagem"/>
                            <figcaption>
                                <h3 className="block-title">Escolta armada</h3>
                                <p className="text">Oferecemos escolta armada para garantir a segurança em deslocamentos de clientes e bens valiosos. Nossa equipe treinada utiliza veículos equipados e tecnologia de monitoramento para proporcionar proteção em todas as situações. Com nossa escolta armada, você pode viajar com tranquilidade, sabendo que está seguro.</p>
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