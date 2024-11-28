import { RiArrowDropDownLine } from 'react-icons/ri'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import '../../assets/sass/layouts/_about.sass'

import values from './valuesData'
import { useState } from 'react'
export default function About(){
    const [valueToBeShown, setValueToBeShown] = useState(0)

    return (
        <div className='container'>
            <Header />
            <main className='about-page'>
                <h2 className='section-title'>Nossa história</h2>

                <div className='about-page-content'>
                    <h3 className='block-title'>GRUPO P10</h3>

                    <p className='text'>O GRUPO P10 é a herdeira de uma tradição milenar de proteção e segurança, que  se estende desde os tempos de Alexandre, o Grande. </p>
                    <p className='text'>Guiados por valores como honra, lealdade, disciplina, excelência, inovação,  adaptação, integridade e ética, buscamos ser a referência global em segurança  patrimonial, preservando o legado de proteção e inovação, presente desde a  antiguidade. Acreditamos que a segurança é um investimento fundamental para o  sucesso de qualquer negócio e que nossa experiência nos permite oferecer  soluções personalizadas e eficazes para cada cliente.</p>
                </div>

                <h2 className='section-title'>Nossos valores</h2>

                <div className='about-page-content'>
                    <h3 className='block-title'>No que acreditamos</h3>

                    <div className="about-page-content-values">
                        {values.map((value) => {
                            return (
                                <div className='value-box' key={value.id} onClick={() => setValueToBeShown(value.id)}>
                                    <div className='title-container'>
                                        <h3 className="value-box-title">{value.name}</h3>
                                        <RiArrowDropDownLine className={valueToBeShown === value.id ? "arrow active": "arrow"} />
                                    </div>
                                    <div className={valueToBeShown === value.id ? "wrapper active": "wrapper"}>
                                        <div className="expandable">
                                            <p className='text value'>{value.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}