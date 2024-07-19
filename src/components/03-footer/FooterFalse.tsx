import Link from "next/link";
import style from "./styleFooter.module.css";

const FooterFalse = () => {
    return (
        <>
            <Link href="/">
                <button className={style.footer__btn}>Зарегестрроваться</button>
            </Link>
        </>
    );
};

export default FooterFalse;
