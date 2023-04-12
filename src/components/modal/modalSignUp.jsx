import React from "react"
import { Modal, Form, Button, Alert } from "react-bootstrap"
import './modalSignIn.css'
import { useHttp } from "../../hooks/http.hook"
import { useNavigate, Link } from "react-router-dom"

export const ModalSignUp = (props) => {

    const { request } = useHttp()
    const navigate = useNavigate()

    const [form, setFormData] = React.useState({ fio: '', password: '', email: '', repeatPassword: '' })
    const [showAlert, setShowAlert] = React.useState(false)

    const register = React.useCallback(async () => {
        try {
            if (form.repeatPassword === form.password) {
                const fetched = await request(`/api/`, 'POST', { ...form })
                navigate("/sign")
                return props.onHide()
            }
            return (setShowAlert(true))
        } catch (error) { console.log(error) }
    }, [form, request])

    const changeFormHandler = event => {
        setFormData({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Modal {...props}>
                <Modal.Header className="modalHeader" closeButton>
                    <Modal.Title className="modalTitle">Войти в Workman</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-5" controlId="fio">
                            <Form.Control className="formControl"
                                type="text"
                                placeholder="ФИО"
                                autoFocus
                                name="fio"
                                value={form.fio}
                                onChange={changeFormHandler}
                            />
                        </Form.Group>
                        <Form.Group className="mb-5" controlId="email">
                            <Form.Control className="formControl"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={form.email}
                                onChange={changeFormHandler}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-5"
                            controlId="password"
                        >
                            <Form.Control className="formControl"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={changeFormHandler}
                                placeholder="Введите пароль" />
                        </Form.Group>
                        <Form.Group
                            className="mb-4"
                            controlId="repeatPassword"
                        >
                            <Form.Control className="formControl"
                                type="password"
                                name='repeatPassword'
                                value={form.repeatPassword}
                                onChange={changeFormHandler}
                                placeholder="Повторите пароль" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="outline-success" className="footerButton" onClick={() => register()}>
                        Регистрация
                    </Button>

                    <br />

                    <div className="footerText">
                        Есть аккаунт?
                        <Link to={'/sign'}><Button variant="link" onClick={() => props.onHide()}>Войти!</Button></Link>
                    </div>

                </Modal.Footer>
{/* 
            {showAlert && <Alert variant="danger">Пароли не совпадают</Alert>} */}
            </Modal >


        </>
    )
}