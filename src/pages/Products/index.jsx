import Header from '../../components/Header'
import Footer from '../../components/Footer'
import productsData from './productData'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Products(){

    return (
        <div className='container'>
            <Header shortHeader={true}/>    
            <main id='products-page'>
                <h1 className="main-title">Nossos produtos</h1>
                <div className="row">
                    <h2 className="section-title">Câmeras de segurança</h2>

                    <div className="products-container">
                        {productsData.map(p => {
                            return (
                                <div className="product" key={p.id}>
                                    <img src={p.productImg} alt="Produto 1" />
                                    <div className="product-description">
                                        <h3 className="block-title">{p.name}</h3>
                                        <p className="text">
                                            {p.description}
                                        </p>
                                    </div>

                                    <Link className='btn about' to={`./product-${p.id}`}>Saiba mais</Link>
                                </div>
                            )
                        })}
                       
                    </div>
                </div>
            </main>    
            <Footer shortFooter={true}/>           
        </div>
    )
}