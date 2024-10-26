import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

import './../../assets/sass/layouts/_signup.sass'

export default function SignUp(){
    return (
        <div className='container-signup'>
            <Header shortHeader={true}/>
            <main className='signup-page'>
                <h2 className='section-title signup-page-title'>Crie sua nova conta</h2>

                <form className='form-signup'>
                    <h3 className='block-title'>Cadastro</h3>

                    <div className='form-signup-content'>
                        <div className="box-container">
                            <div className="form-box">
                                <label className='text-label'>Primeiro nome</label>
                                <input type='text' placeholder='Digite seu primeiro nome'/>
                            </div>
                            <div className="form-box">
                                <label className='text-label'>Sobrenome</label>
                                <input type='text' placeholder='Digite seu sobrenome'/>
                            </div>
                        </div>
                        <div className="form-box">
                            <label className='text-label'>Email</label>
                            <input type='text' placeholder='Digite seu email'/>
                        </div>
                        <div className="box-container">
                            <div className="form-box">
                                <label className='text-label'>Senha</label>
                                <input type='password' placeholder='********'/>
                            </div>
                            <div className="form-box">
                                <label className='text-label'>Confirme sua senha</label>
                                <input type='password' placeholder='********'/>
                            </div>
                        </div>

                        <button className='btn form'> Criar conta </button>

                        <div className="form-text">
                            <p className='form-text'>Já possui uma conta?</p>
                            <Link className='form-text-link' to={'/login'}>Clique aqui para fazer login</Link>
                        </div>
                    </div>
                </form>
            </main>
            <Footer shortFooter={true}/>
        </div>
    )
}