import '../../assets/sass/layouts/_contact.sass'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function contact(){
    return (
        <div className='container'>
            <Header shortHeader={true}/>

            <main className='contact-page'>
                <h2 className='section-title contact-page-title'>Fale conosco</h2>
                <form className='form-contact'>

                    <h3 className='block-title'>Envie sua mensagem</h3>
                    <div className='form-contact-content'>
                        <div className="form-contact-content-top">
                            <div className="form-box">
                                <label className='text-label'>Nome</label>
                                <input type='text' placeholder='Digite seu email'/>
                            </div>
                            <div className="form-box">
                                <label className='text-label'>Email</label>
                                <input type='text' placeholder='Digite sua senha'/>
                            </div>
                        </div>
                        <div className="form-box select">
                            <label className='text-label'>Assunto</label>
                            <select>
                                <option value="1">Dúvidas</option>
                                <option value="2">Reclamações</option>
                                <option value="3">Sugestões</option>
                                <option value="4">Serviços</option>
                                <option value="5">FeedBack</option>
                            </select>
                        </div>
                        <div className="form-box textarea">
                            <label className='text-label'>Mensagem</label>
                            <textarea placeholder='Digite sua mensagem'></textarea>
                        </div>

                        <button className='btn form contact'> Enviar </button>
                    </div>

                </form>
            </main>
            
            <Footer shortFooter={true}/>
        </div>
    )
}