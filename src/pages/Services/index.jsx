import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../assets/sass/layouts/_services.sass'

import services from './servicesData.js'
import { useState } from 'react'

import { RiArrowDropDownLine } from "react-icons/ri";

export default function Services(){
    const [serviceToBeShown, setServiceToBeShown] = useState(0)

    return (
        <div className='container'>
            <Header />
            <main className='services-page'>
                <h2 className="section-title">Nossos serviços</h2>

                <div className="services-page-content">
                    <h3 className="block-title">Explore nossos serviços</h3>

                    <div className="services-page-content-services">
                        {services.map((service) => {
                            return (
                                <div className='service-box' key={service.id} onClick={() => setServiceToBeShown(service.id)}>
                                    <div className='title-container'>
                                        <h3 className="service-box-title">{service.name}</h3>
                                        <RiArrowDropDownLine className={serviceToBeShown === service.id ? "arrow active": "arrow"} />
                                    </div>
                                    <div className={serviceToBeShown === service.id ? "wrapper active": "wrapper"}>
                                        <div className="expandable">
                                            <p className="service-subtitle">Sobre o serviço</p>
                                            <p className='text service'>{service.description}</p>

                                            <p className="service-subtitle">Como funciona?</p>
                                            <p className='text service'>{service.process}</p>
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