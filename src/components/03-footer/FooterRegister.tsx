import Link from "next/link";
import style from "./styleFooter.module.css";

const FooterRegister = () => {
    return (
        <>
            <Link href="/register">
                <button className={style.footer__btn}>Зарегестрроваться</button>
            </Link>
        </>
    );
};

export default FooterRegister;
