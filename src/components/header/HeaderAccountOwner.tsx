import Image from "next/image";
import Link from "next/link";
import logo from "./../../../public/img/logo-wrapper.jpg";
import style from "./Header.module.css";
import HeaderNameImg from "./headerNameImg/HeaderNameImg";

const HeaderAccountOwner = () => {

    return (
        <header className={style.header}>
            <div className={style.left}>
                <Link href="/account/owner">
                    <Image  alt="Логотип" className={style.left__img} src={logo} priority />
                </Link>

                <p className={style.text}>Разрабатываем и запускаем сложные веб проекты</p>
            </div>
                <HeaderNameImg/>
        </header>
    );
};

export default HeaderAccountOwner;