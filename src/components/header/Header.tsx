// "use client";
import Image from "next/image";
import Link from "next/link";
import ButtonHeader from "../ui/buttonHeader/ButtonHeader";
import logo from "./../../../public/img/logo-wrapper.jpg";
import style from "./Header.module.css";

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
