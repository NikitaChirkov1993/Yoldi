import Link from "next/link";
import style from "./Footer.module.css";
const FooterLogin = () => {
    return (
        <>
            <Link href="/login">
                <button className={style.footer__btn}>Войти</button>
            </Link>
        </>
    );
};

export default FooterLogin;
