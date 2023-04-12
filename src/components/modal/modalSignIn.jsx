import React from "react"
import { Modal, Form, Button } from "react-bootstrap"
import { useHttp } from "../../hooks/http.hook"
import { useSignIn } from 'react-auth-kit'
import { Link } from 'react-router-dom'
import './modalSignIn.css'

export const ModalSignIn = (props) => {
    const signIn = useSignIn()
    const { request, loading } = useHttp()
    const [formData, setFormData] = React.useState({ email: '', password: '' })

    const onSubmit = React.useCallback(async () => {
        try {
            const fetched = await request(`/api/`, 'POST', { ...formData })
            signIn({
                token: fetched.token,
                expiresIn: fetched.expiresIn,
                tokenType: "Bearer",
                authState: fetched.authUserState,
                refreshToken: fetched.refreshToken,
                refreshTokenExpireIn: fetched.refreshTokenExpireIn
            })
            props.onHide()
        } catch (error) { }
    }, [request])

    const changeFormHandler = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Modal {...props}>
                <Modal.Header className="modalHeader" closeButton>
                    <Modal.Title className="modalTitle">Войти в Workman</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-5" controlId="email">
                            <Form.Control className="formControl"
                                type="email"
                                name='email'
                                onChange={changeFormHandler}
                                placeholder="Email"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-4"
                            controlId="password"
                        >
                            <Form.Control className="formControl"
                            onChange={changeFormHandler}
                            name='password'
                            type='password'
                                placeholder="Пароль" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="outline-success" className="footerButton" onClick={() => onSubmit()}>
                        Войти
                    </Button>

                    <br />

                    <div className="footerText">
                        Нет аккаунта?
                        <Link to={'/registration'}><Button variant="link" onClick={() => props.onHide()}>Зарегистрируйся!</Button></Link>
                    </div>

                </Modal.Footer>

            </Modal>
        </>
    )
}