import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

import './../../assets/sass/layouts/_login.sass'
export default function Login(){

    function handleLogin(){

    }

    return (
        <div className='container-login'>
            <Header shortHeader={true}/>
            <main className='login-page'>
                <h2 className='section-title login-page-title'>Entre em sua conta</h2>

                <form className='form-login'>
                    <h3 className='block-title'>Faça seu login</h3>

                    <div className='form-login-content'>
                        <div className="form-box">
                            <label className='text-label'>Email</label>
                            <input type='text' placeholder='Digite seu email'/>
                        </div>
                        <div className="form-box">
                            <label className='text-label'>Senha</label>
                            <input type='text' placeholder='Digite sua senha'/>
                        </div>

                        <button className='btn form' onClick={handleLogin}> Entrar </button>

                        <div className="form-text">
                            <p className='form-text'>Ainda não possui uma conta?</p>
                            <a className='form-text-link'>Clique aqui para criar sua conta</a>
                        </div>
                    </div>
                </form>
            </main>
            <Footer shortFooter={true}/>
        </div>
    )
}