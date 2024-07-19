import Link from "next/link";
import style from "./styleFooter.module.css";
const FooterTrue = () => {
    return (
        <>
            <Link href="/login">
                <button className={style.footer__btn}>Войти</button>
            </Link>
        </>
    );
};

export default FooterTrue;
