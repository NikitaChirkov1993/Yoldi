import style from "./styleHeader.module.css";
import Image from "next/image";
import logo from './../../../public/img/logo-wrapper.jpg';
import ButtonHeader from "./../UI/ButtonHeader/ButtonHeader"
const Header = () => {
    return (
        <header className={style.wrapper}>
            <div className={style.left}>
                <Image
                    className={style.left__img}
                    src={logo}
                />
                {/* <img className={style.left__img} src={logo} alt="Логотип" /> */}
                <p className={style.text}>Разрабатываем и запускаем сложные веб проекты</p>
            </div>

            <ButtonHeader/>
        </header>
     );
}

export default Header;