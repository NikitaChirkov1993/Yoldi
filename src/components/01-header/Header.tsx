"use client";
import style from "./styleHeader.module.css";
import Image from "next/image";
import logo from './../../../public/img/logo-wrapper.jpg';
import ButtonHeader from "../UI/ButtonHeader/ButtonHeader";
import HeaderNameImg from "../headerNameImg/HeaderNameImg";
const Header = () => {
    function handleBtn() {
        console.log("кливоооывра");
    };
    return (
        <header className={style.header}>
            <div className={style.left}>
                <Image
                    alt="Логотип"
                    className={style.left__img}
                    src={logo}
                    priority
                />
                <p className={style.text}>Разрабатываем и запускаем сложные веб проекты</p>
            </div>
            <HeaderNameImg/>
            {/* <ButtonHeader onClick={handleBtn}>Войти</ButtonHeader> */}

        </header>
     );
}

export default Header;