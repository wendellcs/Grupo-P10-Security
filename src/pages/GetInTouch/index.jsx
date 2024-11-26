import '../../assets/sass/layouts/_getintouch.sass'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function GetInTouch(){
    return (
        <div className='container-getInTouch'>
            <Header shortHeader={true}/>

            <main className='getInTouch-page'>
                <h2 className='section-title getInTouch-page-title'>Fale conosco</h2>
                <form className='form-getInTouch'>

                    <h3 className='block-title'>Envie sua mensagem</h3>
                    <div className='form-getInTouch-content'>
                        <div className="form-getInTouch-content-top">
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

                        <button className='btn form getInTouch'> Enviar </button>
                    </div>

                </form>
            </main>
            
            <Footer shortFooter={true}/>
        </div>
    )
}