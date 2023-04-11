import { Modal, Form, Button } from "react-bootstrap"
import './modalSignIn.css'

export const ModalSignIn = (props) => {

    return (
        <>
            <Modal {...props}>
                <Modal.Header className="modalHeader" closeButton>
                    <Modal.Title className="modalTitle">Войти в Workman</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                            <Form.Control className="formControl"
                                type="email"
                                placeholder="Email"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-4"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Control className="formControl"
                                placeholder="Пароль" />
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