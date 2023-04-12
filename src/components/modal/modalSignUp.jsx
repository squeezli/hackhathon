import React from "react"
import { Modal, Form, Button } from "react-bootstrap"
import './modalSignIn.css'
import { useHttp } from "../../hooks/http.hook"
import { useNavigate } from "react-router-dom"

export const ModalSignUp = (props) => {

    const { request } = useHttp()
    const navigate = useNavigate()

    const [form, setFormData] = React.useState({ fio: '', password: '', email: '' })

    const register = React.useCallback(async () => {
        try {
            // const fetched = await request(`/api/`, 'POST', {...form})
            console.log('sign')
            navigate("/sign")
        } catch (error) { console.log(error) }
    }, [form, request])

    return (
        <>
            <Modal {...props}>
                <Modal.Header className="modalHeader" closeButton>
                    <Modal.Title className="modalTitle">Войти в Workman</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-5" controlId="FIO">
                            <Form.Control className="formControl"
                                type="text"
                                placeholder="ФИО"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-5" controlId="email">
                            <Form.Control className="formControl"
                                type="email"
                                placeholder="Email"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-5"
                            controlId="password"
                        >
                            <Form.Control className="formControl"
                                placeholder="Введите пароль" />
                        </Form.Group>
                        <Form.Group
                            className="mb-4"
                            controlId="repeatPassword"
                        >
                            <Form.Control className="formControl"
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
                        <Button variant="link">Войти!</Button>
                    </div>

                </Modal.Footer>

            </Modal>
        </>
    )
}