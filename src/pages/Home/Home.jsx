import React from "react";
import Form from 'react-bootstrap/Form';
import img from '../../img/Thousand-03.png'
import "./Home.css";
export const Home = () => {

    return (
        <>
            <div className="sectionOne">
                <div className="content__sectionOne">
                    <div className="header__conten">
                        <h2 align='left'>Сфера <br /> деятельности</h2>

                        <Form.Select aria-label="Default select example" className="" style={{ width: "245px" }}>
                            <option value="1">Фрилансер</option>
                            <option value="2">Заказчик</option>
                        </Form.Select>
                    </div>
                    <div className="main__content">
                        <div className="blockOne__main">
                            <p>Соцсети, реклама</p>
                            <p>Разработка, it</p>
                            <p>Аудио,видео</p>
                            <p>Тексты и перевод</p>
                        </div>
                        <div className="blockTwo__main">
                            <p>Бизнес</p>
                            <p>Дизайн</p>
                        </div>


                    </div>
                </div>

                <div className="img__sectionOne" >
                    <img src={img} />
                </div>
            </div>
        </>
    )
}