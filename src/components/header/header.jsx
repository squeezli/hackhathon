import React, { useState } from 'react'
import './header.css'
import logo from '../../img/logo.png'
import { Button } from 'react-bootstrap'
import { ModalSignIn } from '../modal/modalSignIn'
import { ModalSignUp } from '../modal/modalSignUp'
import { useIsAuthenticated } from 'react-auth-kit'

import { useSignOut } from 'react-auth-kit'
import { Link } from 'react-router-dom'

export const Header = () => {

    const isAuthenticated = useIsAuthenticated()
    const [showSignIn, setShowSignIn] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)

    const signOut = useSignOut()


    return (
        <div className='Header'>

            <Link className="Header-logo" to="/">
                <div className="Header-link link" variant='link'>WORKMAN</div> {" "}
                <img src={logo} alt="" />
            </Link>

            <div className="Header-nav">

                <Link to={'/orders'} > <Button className="link" variant="link">Заказы</Button></Link>{' '}
                <Link to={'/performers'} > <Button className="link" variant="link">Исполнители</Button></Link>{' '}
                <Link to={'/vacancy'} > <Button className="link" variant="link">Вакансии </Button></Link>{' '}

                    {console.log(isAuthenticated())}

                    {!isAuthenticated() && <>
                        <Button variant="outline-warning" onClick={() => setShowSignIn(true)}>Вход</Button> {' '}
                        <Button variant="warning" onClick={() => setShowSignUp(true)}>Регистрация</Button>
                        <ModalSignIn show={showSignIn} onHide={() => setShowSignIn(false)} />
                        <ModalSignUp show={showSignUp} onHide={() => setShowSignUp(false)} />
                    </>}

                    {isAuthenticated() && <Button variant="warning" onClick={() => signOut()}>Выход</Button>}

            </div>

        </div >
    )
}