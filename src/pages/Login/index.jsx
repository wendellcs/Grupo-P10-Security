import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './../../services/redux/userSlice.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebase/firebaseConnection.js'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './../../assets/sass/layouts/_login.sass'

export default function Login(){
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function handleLogin(e){

        e.preventDefault()

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            
            dispatch(setCurrentUser({
                email: user.email, 
                uid: user.uid,
                name: user.name
            }))

            setEmail('')
            setPassword('')

            navigate('/')
        }catch(error){
            alert('Falha ao realizar login. Verifique seu email e senha.')
        }
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
                            <input type='text' placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-box">
                            <label className='text-label'>Senha</label>
                            <input type='text' placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <button className='btn form' onClick={handleLogin}> Entrar </button>

                        <div className="form-text">
                            <p className='form-text'>Ainda não possui uma conta?</p>
                            <Link className='form-text-link' to={'/signup'}>Clique aqui para criar sua conta</Link>
                        </div>
                    </div>
                </form>
            </main>
            <Footer shortFooter={true}/>
        </div>
    )
}