// "use client";
import style from "./styleHeader.module.css";
import Image from "next/image";
import logo from "./../../../public/img/logo-wrapper.jpg";
import ButtonHeader from "../UI/buttonHeader/ButtonHeader";
import HeaderNameImg from "../headerNameImg/HeaderNameImg";
import Link from "next/link";
const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.left}>
                <Link href="/">
                    <Image  alt="Логотип" className={style.left__img} src={logo} priority />
                </Link>

                <p className={style.text}>Разрабатываем и запускаем сложные веб проекты</p>
            </div>
            {/* <HeaderNameImg/> */}
            <Link href="/login">
                <ButtonHeader>Войти</ButtonHeader>
            </Link>
        </header>
    );
};

export default Header;
