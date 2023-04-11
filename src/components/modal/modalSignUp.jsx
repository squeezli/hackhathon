import { Modal, Form, Button } from "react-bootstrap"
import './modalSignIn.css'

export const ModalSignUp = (props) => {

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

                    <Button variant="outline-success" className="footerButton" >
                        Войти
                    </Button>

                    <br/>

                    <div className="footerText">
                        Нет аккаунта?
                        <Button variant="link">Зарегистрируйся!</Button>
                    </div>

                </Modal.Footer>

            </Modal>
        </>
    )
}