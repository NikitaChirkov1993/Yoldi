import Link from "next/link";
import style from "./Footer.module.css";

const loginContent = (
    <>
        <div className={style.footer__text}>Уже есть аккаунт?</div>
        <Link href="/login">
            <button className={style.footer__btn}>Войти</button>
        </Link>
    </>
);

const registerContent = (
    <>
        <div className={style.footer__text}>Еще нет аккаунта?</div>
        <Link href="/register">
            <button className={style.footer__btn}>Зарегистрироваться</button>
        </Link>
    </>
);

const Footer = ({ flag }) => {
    return (
        <footer className={style.footer}>
            {flag ? loginContent : registerContent}
        </footer>
     );
}

export default Footer;