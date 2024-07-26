import Link from "next/link";
import style from "./Footer.module.css";

const FooterRegister = () => {
    return (
        <>
            <Link href="/register">
                <button className={style.footer__btn}>Зарегестрироваться</button>
            </Link>
        </>
    );
};

export default FooterRegister;
