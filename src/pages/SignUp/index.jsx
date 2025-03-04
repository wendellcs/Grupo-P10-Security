import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import { auth } from './../../services/firebase/firebaseConnection.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function SignUp(){
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            
            alert('Cadastrado com sucesso')
            
        } catch (error) {
            alert('Algo deu errado')
            console.log(error.message)
        }
    }

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
                                <input type='text' placeholder='Digite seu primeiro nome' value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="form-box">
                                <label className='text-label'>Sobrenome</label>
                                <input type='text' placeholder='Digite seu sobrenome' value = {lastName} onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form-box">
                            <label className='text-label'>Email</label>
                            <input type='text' placeholder='Digite seu email'  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="box-container">
                            <div className="form-box">
                                <label className='text-label'>Senha</label>
                                <input type='password' placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="form-box">
                                <label className='text-label'>Confirme sua senha</label>
                                <input type='password' placeholder='********' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                            </div>
                        </div>

                        <button className='btn form' onClick={(e) => { handleSubmit(e) }}> Criar conta </button>
                   
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