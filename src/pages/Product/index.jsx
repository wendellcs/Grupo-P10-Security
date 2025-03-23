import { useEffect } from "react"
import { useParams } from "react-router-dom"

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Product(){
    const {id} = useParams()

    // Buscar o produto no banco de dados e carregar as infos

    return (
        <div className="container">
            <Header/>
            <main>
                
            </main>
            <Footer/>
        </div>
        
    )
}